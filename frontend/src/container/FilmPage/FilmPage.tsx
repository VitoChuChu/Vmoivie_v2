import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Tooltip, message, Image } from "antd";
import styled from "styled-components";
import CastCards from "../../components/compose/Cards/CastCards";
import MoviesCard from "../../components/compose/Cards/MoviesCard";
import TrailerModal from "../../components/compose/TrailerModal/TrailerModal";
import {
  CenterCenterRow,
  CenterCenterCol,
} from "../../components/atoms/grid/grid";
import { FilmPageBKG, PosterImg } from "../../components/atoms/image/image";
import { StyledH1, TitleH1, StyledH2 } from "../../components/atoms/text/text";
import {
  GenerButton,
  LikeButton,
} from "../../components/atoms/button/CustomizeButton";
import { MovieDetail, Cast } from "../../interface/movie";
import {
  fetchMovieDetail,
  fetchMovieCast,
  fetchMovieVideos,
  fetchSimilarMovies,
} from "../../service/TMDB_API";
import {
  checkWishList,
  addWishList,
  removeWishList,
} from "../../service/DB_API";

const Trailer = require("../../images/Tralier.svg") as string;
const UnlikeImg = require("../../images/LikeT.svg") as string;
const LikeImg = require("../../images/LikeR.svg") as string;

const MaskDiv = styled.div`
  border: 2px solid rgba(107, 107, 107, 0.279);
  padding: 3rem 0;
  margin-bottom: 1rem;
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
  @media screen and (max-width: 991px) {
    padding: 1rem 0;
  }
`;

interface FilmPageProps {
  scrollToTop: () => void;
}

const FilmPage: React.FC<FilmPageProps> = ({ scrollToTop }) => {
  const params = useParams<{ id: string }>();
  const [detail, setDetail] = useState<MovieDetail | null>(null);
  const [video, setVideo] = useState<any>(null);
  const [casts, setCasts] = useState<Cast[]>([]);
  const [similarMovies, setSimilarMovies] = useState<MovieDetail[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [like, setLike] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const userToken = localStorage.getItem("token");
  const userID = localStorage.getItem("userID");

  const success = (text: string) => {
    messageApi.open({
      type: "success",
      content: text,
    });
  };

  const checkWishlist = async (id: number): Promise<boolean> => {
    if (userID != null) {
      const data = await checkWishList(userID, id);
      if (data) return data;
    }
    return false;
  };

  const addUserWishlist = async () => {
    if (detail && userID) {
      const config = {
        userID: userID,
        movieID: detail.id,
        title: detail.title,
        release_date: detail.release_date,
        poster_path: detail.poster_path,
      };
      await addWishList(userID, config);
    }
    success("Added to wishlist successfully");
  };

  const removeUserWishlist = async () => {
    if (detail && userID) {
      await removeWishList(userID, detail.id);
      success("Removed from wishlist successfully");
    }
  };

  const likeHandler = async () => {
    if (!like) {
      setLike(!like);
      await addUserWishlist();
    } else {
      setLike(!like);
      await removeUserWishlist();
    }
  };

  const checkLoginStatus = () => {
    if (userToken != null) setLoginStatus(true);
  };

  useEffect(() => {
    checkLoginStatus();
    const fetchAPI = async () => {
      setLike(await checkWishlist(Number(params.id)));
      setDetail(await fetchMovieDetail(Number(params.id)));
      setVideo(await fetchMovieVideos(Number(params.id)));
      setCasts(await fetchMovieCast(Number(params.id)));
      setSimilarMovies(await fetchSimilarMovies(Number(params.id)));
    };
    fetchAPI();
  }, [params.id]);

  if (!detail) {
    return null;
  }

  const imgUrl = `https://image.tmdb.org/t/p/original/${detail.poster_path}`;
  const imgUrl_low = `https://image.tmdb.org/t/p/w780/${detail.backdrop_path}`;

  const genresList = detail.genres?.map((item) => (
    <GenerButton key={item.name}>{item.name}</GenerButton>
  ));

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CenterCenterRow>
        <Col span={24} style={{ height: "5rem" }}></Col>
        <Col span={24}>
          <FilmPageBKG src={imgUrl_low} alt="" />
        </Col>
        <Col span={24}>
          <MaskDiv>
            <CenterCenterRow>
              <CenterCenterCol xs={24} lg={7}>
                <PosterImg src={imgUrl} alt={detail.title} />
              </CenterCenterCol>
              <Col xs={22} lg={15}>
                <Row>
                  <Col span={24}>
                    <TitleH1>{detail.title}</TitleH1>
                  </Col>
                  <Col span={24} style={{ margin: "0 0 1.25rem 0" }}>
                    {genresList}
                  </Col>
                  <Col span={24}>
                    <Row>
                      <Col xs={24} lg={6}>
                        <StyledH2>Run time</StyledH2>
                        <p style={{ color: "white" }}>{detail.runtime}mins</p>
                      </Col>
                      <Col xs={24} lg={6}>
                        <StyledH2>Release Date</StyledH2>
                        <p style={{ color: "white" }}>{detail.release_date}</p>
                      </Col>
                      <Col xs={24} lg={12}>
                        <StyledH2>Offical website</StyledH2>
                        <a
                          href={detail.homepage}
                          target="_blank"
                          rel="noreferrer noopener"
                          style={{ color: "white" }}
                        >
                          <p>{detail.homepage}</p>
                        </a>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={24}>
                    <StyledH2>Overview</StyledH2>
                    <p style={{ color: "white" }}>{detail.overview}</p>
                  </Col>
                  {video && (
                    <Col span={24} style={{ margin: "1rem 0" }}>
                      <Image
                        src={Trailer}
                        alt="Trailer"
                        preview={false}
                        onClick={showModal}
                        style={{
                          width: "150px",
                          height: "60px",
                          cursor: "pointer",
                        }}
                      />
                      <TrailerModal
                        isModalOpen={isModalOpen}
                        video={video}
                        handleCancel={handleCancel}
                        detail={detail}
                      />
                    </Col>
                  )}
                  <Col span={24} style={{ position: "relative" }}>
                    {contextHolder}
                    {loginStatus ? (
                      like ? (
                        <LikeButton
                          imgSrc={LikeImg}
                          onClick={() => {
                            likeHandler();
                          }}
                        />
                      ) : (
                        <LikeButton
                          imgSrc={UnlikeImg}
                          onClick={() => {
                            likeHandler();
                          }}
                        />
                      )
                    ) : (
                      <Tooltip placement="right" title="Please login first.">
                        <LikeButton imgSrc={UnlikeImg} />
                      </Tooltip>
                    )}
                  </Col>
                </Row>
              </Col>
            </CenterCenterRow>
          </MaskDiv>
        </Col>
        <CenterCenterCol span={24}>
          <CenterCenterRow>
            <Col span={24}>
              <StyledH1>Cast</StyledH1>
            </Col>
            <Col span={24}>
              <CenterCenterRow>
                {casts.slice(0, 6).map((item) => {
                  return (
                    <CenterCenterCol
                      xs={22}
                      sm={11}
                      md={8}
                      lg={4}
                      key={item.id}
                      style={{ alignSelf: "center" }}
                    >
                      <CastCards item={item} />
                    </CenterCenterCol>
                  );
                })}
              </CenterCenterRow>
            </Col>
          </CenterCenterRow>
        </CenterCenterCol>
        <CenterCenterCol span={24}>
          <CenterCenterRow>
            <Col span={24}>
              <StyledH1>Similar Movies</StyledH1>
            </Col>
            <Col span={24}>
              <CenterCenterRow>
                {similarMovies.slice(0, 6).map((item) => {
                  return (
                    <CenterCenterCol
                      xs={22}
                      sm={11}
                      md={8}
                      lg={4}
                      key={item.id}
                      style={{ alignSelf: "center" }}
                    >
                      <MoviesCard item={item} scrollToTop={scrollToTop} />
                    </CenterCenterCol>
                  );
                })}
              </CenterCenterRow>
            </Col>
          </CenterCenterRow>
        </CenterCenterCol>
      </CenterCenterRow>
    </>
  );
};

export default FilmPage;
