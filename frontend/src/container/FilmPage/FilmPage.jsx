import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Col,
  Row,
  Button,
  // Modal,
  Tooltip,
  message,
} from "antd";
// import ReactPlayer from "react-player";
import styled from "styled-components";
import CastCards from "../../components/Cards/CastCards";
import MoviesCard from "../../components/Cards/MoviesCard";
import TrailerModal from "../../components/TrailerModal/TrailerModal";
import Trailer from "../../images/Tralier.svg";
import UnlikeImg from "../../images/LikeT.svg";
import LikeImg from "../../images/LikeR.svg";
import axios from "axios";
import {
  fetchMovieDetail,
  fetchMovieCast,
  fetchMovieVideos,
  fetchSimilarMovies,
} from "../../service/fetchData_Axios";

import PropTypes from "prop-types";

const FilmPageBKG = styled.img`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  -o-object-fit: contain;
  object-fit: contain;
  z-index: 0;
  filter: brightness(0.5) sepia(1);
`;

const FilterDiv = styled.div`
  border: 2px solid rgba(107, 107, 107, 0.279);
  padding: 3rem 0;
  margin-bottom: 1rem;
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
  @media screen and (max-width: 991px) {
    padding: 1rem 0;
  }
`;

const H1 = styled.h1`
  color: #f4c10f;
  font-size: 2rem;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TitleH1 = styled.h1`
  color: white;
  font-size: 2rem;
  margin: 0;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TitleH2 = styled.h2`
  color: #f4c10f;
  font-size: 1.5rem;
  margin: 0;
  font-weight: 600;
`;

const CcRow = styled(Row)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CcCol = styled(Col)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SpaceAroundCol = styled(Col)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const FlexStartCRow = styled(Row)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const PosterImg = styled.img`
  height: auto;
  width: 22vw;
  object-fit: contain;
  @media screen and (max-width: 424px) {
    width: 65vw;
    margin: 0.5rem 0;
  }
  @media screen and (min-width: 425px) {
    width: 50vw;
    margin: 0.5rem 0;
  }
  @media screen and (min-width: 650px) {
    width: 30vw;
    margin: 0.5rem 0;
  }
  @media screen and (min-width: 992px) {
    width: 22vw;
    margin: 0.5rem 0;
  }
`;

const StyledButton = styled(Button)`
  color: #f4c10f;
  border-color: #f4c10f;
  background-color: transparent;
  margin: 0 0.5rem 0.5rem 0.5rem;
  &:hover {
    border-color: #f4c10f;
    background-color: #f4c10f;
  }
`;

const UnLikeButton = styled.div`
  width: 150px;
  height: 60px;
  display: inline-block;
  background-image: url(${UnlikeImg});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  cursor: pointer;
  &:active {
    opacity: 0.5;
  }
`;

const LikeButton = styled.div`
  width: 150px;
  height: 60px;
  display: inline-block;
  background-image: url(${LikeImg});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  cursor: pointer;
  &:active {
    opacity: 0.5;
  }
`;

const FilmPage = ({ scrollToTop }) => {
  const params = useParams();
  const [detail, setDetail] = useState([]);
  const [video, setVideo] = useState([]);
  const [casts, setCasts] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [like, setLike] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  FilmPage.propTypes = {
    scrollToTop: PropTypes.func,
  };

  const userToken = localStorage.getItem("token");
  const checkWishlist = async () => {
    if (userToken != null) {
      const config = {
        method: "put",
        headers: {
          authorization: userToken,
          "content-type": "application/json",
        },
        data: {
          movieID: params.id,
        },
      };
      const data = await axios(
        "http://localhost:8080/filmpage/chechWishlist",
        config
      );
      if (data.data) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const success = (text) => {
    messageApi.open({
      type: "success",
      content: text,
    });
  };

  const addUserWishlist = async () => {
    const config = {
      method: "post",
      headers: {
        authorization: userToken,
        "content-type": "application/json",
      },
      data: {
        movieID: detail.id,
        title: detail.title,
        release_date: detail.release_date,
        poster_path: detail.poster_path,
      },
    };
    await axios("http://localhost:8080/filmpage/addUserWishlist", config);
    success("Added to wishlist successfully");
  };

  const removeUserWishlist = async () => {
    const config = {
      method: "delete",
      headers: {
        authorization: userToken,
        "content-type": "application/json",
      },
      data: {
        movieID: detail.id,
      },
    };
    await axios("http://localhost:8080/filmpage/removeUserWishlist", config);
    success("Removed from wishlist successfully");
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
    if (userToken != null) {
      setLoginStatus(true);
    }
  };

  useEffect(() => {
    checkLoginStatus();
    const fetchAPI = async () => {
      setLike(await checkWishlist());
      setDetail(await fetchMovieDetail(params.id));
      setVideo(await fetchMovieVideos(params.id));
      setCasts(await fetchMovieCast(params.id));
      setSimilarMovies(await fetchSimilarMovies(params.id));
    };
    fetchAPI();
  }, [params.id]);

  const imgUrl = `https://image.tmdb.org/t/p/original/${detail.poster_path}`;
  const imgUrl_low = `https://image.tmdb.org/t/p/w780/${detail.backdrop_path}`;

  let genres = [];
  genres = detail.genres;
  let genresList;
  if (genres) {
    genresList = genres.map((item) => {
      return <StyledButton key={item.name}>{item.name}</StyledButton>;
    });
  }

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <CcRow
        align="middle"
        justify="center"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <Col span={24} style={{ height: "64px" }}></Col>
        <Col span={24}>
          <FilmPageBKG src={imgUrl_low} alt=""></FilmPageBKG>
        </Col>
        <Col span={24} style={{ margin: "1rem" }}>
          <FilterDiv>
            <CcRow>
              <CcCol xs={24} lg={7}>
                <PosterImg src={imgUrl} alt={detail.title} />
              </CcCol>
              <Col xs={22} lg={15}>
                <Row>
                  <Col span={24}>
                    <TitleH1 style={{ color: "white" }}>{detail.title}</TitleH1>
                  </Col>
                  <Col span={24} data-testid="genreList">
                    {genresList}
                  </Col>
                  <Col span={24}>
                    <Row>
                      <Col xs={22} lg={6}>
                        <TitleH2 style={{ color: "#f4c10f" }}>Run time</TitleH2>
                        <p style={{ color: "white" }}>{detail.runtime}mins</p>
                      </Col>
                      <Col xs={22} lg={6} data-testid="releaseDate">
                        <TitleH2 style={{ color: "#f4c10f" }}>
                          Release Date
                        </TitleH2>
                        <p style={{ color: "white" }}>{detail.release_date}</p>
                      </Col>
                      <Col xs={22} lg={8} data-testid="officalWebsite">
                        <TitleH2 style={{ color: "#f4c10f" }}>
                          Offical website
                        </TitleH2>
                        <a
                          href={detail.homepage}
                          target="_blank"
                          rel="noreferrer noopener"
                          style={{ color: "white" }}
                        >
                          {detail.homepage}
                        </a>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={24} data-testid="overview">
                    <TitleH2 style={{ color: "#f4c10f" }}>Overview</TitleH2>
                    <p style={{ color: "white" }}>{detail.overview}</p>
                  </Col>
                  {video === undefined ? null : (
                    <Col span={24} style={{ margin: "1rem 0" }}>
                      <img
                        src={Trailer}
                        alt="Trailer"
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
                          onClick={() => {
                            likeHandler();
                          }}
                          data-testid="likedButton"
                        ></LikeButton>
                      ) : (
                        <UnLikeButton
                          onClick={() => {
                            likeHandler();
                          }}
                          data-testid="unLikedButton"
                        ></UnLikeButton>
                      )
                    ) : (
                      <Tooltip placement="right" title="Please login first.">
                        <UnLikeButton data-testid="unLikeButton"></UnLikeButton>
                      </Tooltip>
                    )}
                  </Col>
                </Row>
              </Col>
            </CcRow>
          </FilterDiv>
        </Col>
        <SpaceAroundCol span={23}>
          <CcRow data-testid="cast">
            <Col span={23}>
              <H1>Cast</H1>
            </Col>
            <Col span={23}>
              <FlexStartCRow>
                {casts.slice(0, 6).map((item) => {
                  return (
                    <CcCol xs={22} sm={11} md={8} lg={4} key={item.id}>
                      <CastCards item={item} />
                    </CcCol>
                  );
                })}
              </FlexStartCRow>
            </Col>
          </CcRow>
        </SpaceAroundCol>
        <SpaceAroundCol span={23}>
          <CcRow data-testid="similarMovies">
            <Col span={23}>
              <H1>Similar Movies</H1>
            </Col>
            <Col span={23}>
              <FlexStartCRow>
                {similarMovies.slice(0, 6).map((item) => {
                  return (
                    <CcCol xs={22} sm={11} md={8} lg={4} key={item.id}>
                      <MoviesCard item={item} scrollToTop={scrollToTop} />
                    </CcCol>
                  );
                })}
              </FlexStartCRow>
            </Col>
          </CcRow>
        </SpaceAroundCol>
      </CcRow>
    </div>
  );
};

export default FilmPage;
