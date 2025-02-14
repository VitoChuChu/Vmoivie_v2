import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import styled from "styled-components";
import WishlistCards from "../../components/compose/Cards/WishlistCards";
import { getWishList } from "../../service/DB_API";

const notLoginImage = require("../../images/loginImg.svg") as string;
const emptyImage = require("../../images/emptyImg.svg") as string;

const CcRow = styled(Row)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
`;
const CcCol = styled(Col)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const FlexStartCRow = styled(Row)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

interface WishlistProps {
  scrollToTop: () => void;
}

interface Movie {
  movieID: number;
  title: string;
  poster_path: string;
  vote_average: number;
  posterPath: string;
  releaseDate: string;
}

const Wishlist: React.FC<WishlistProps> = ({ scrollToTop }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loginStatus, setLoginStatus] = useState<boolean>(false);
  const userToken = localStorage.getItem("token");

  const loginStatusHandler = () => {
    if (userToken != null) {
      setLoginStatus(true);
    }
  };

  const getUserWishlistMovies = async () => {
    if (userToken != null) {
      const data = await getWishList(userToken);
      console.log("data", data);
      return data;
    }
    return [] as Movie[];
  };

  useEffect(() => {
    loginStatusHandler();
    const fetchAPI = async () => {
      const movies = await getUserWishlistMovies();
      if (movies) {
        setMovies(movies);
      }
    };
    fetchAPI();
  }, []);

  return (
    <CcRow>
      {loginStatus ? (
        movies.length !== 0 ? (
          <Col span={23}>
            <Col span={24} style={{ height: "15vh" }}></Col>
            <FlexStartCRow>
              {movies.map((item) => {
                return (
                  <CcCol xs={22} sm={11} md={8} lg={4} key={item.movieID}>
                    <WishlistCards item={item} scrollToTop={scrollToTop} />
                  </CcCol>
                );
              })}
            </FlexStartCRow>
          </Col>
        ) : (
          <CcRow>
            <Col span={24} style={{ height: "15vh" }}></Col>
            <CcCol span={24}>
              <img
                src={emptyImage}
                alt="Have a favorite movie first~"
                style={{ width: "300px", height: "400px" }}
              />
            </CcCol>
            <CcCol span={24}>
              <h1 style={{ fontSize: "2rem", color: "#f4c10f" }}>
                ! ! ! E M P T Y ! ! !
              </h1>
            </CcCol>
          </CcRow>
        )
      ) : (
        <CcRow>
          <Col span={24} style={{ height: "15vh" }}></Col>
          <CcCol span={24}>
            <img
              src={notLoginImage}
              alt="Login first~"
              style={{ width: "300px", height: "400px" }}
            />
          </CcCol>
          <CcCol span={24}>
            <h1 style={{ fontSize: "2rem", color: "#f4c10f" }}>
              Please login to have wishlist!!
            </h1>
          </CcCol>
        </CcRow>
      )}
    </CcRow>
  );
};

export default Wishlist;
