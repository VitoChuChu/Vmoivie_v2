import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import styled from "styled-components";
import WishlistCards from "../../components/Cards/WishlistCards";
import notLoginImage from "../../images/loginImg.svg";
import emptyImage from "../../images/emptyImg.svg";
import PropTypes from "prop-types";
import axios from "axios";

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

const Wishlist = ({ scrollToTop }) => {
  const [movies, setMovies] = useState([]);
  const [loginStatus, setLoginStatus] = useState(false);
  const userToken = localStorage.getItem("token");

  Wishlist.propTypes = {
    scrollToTop: PropTypes.func,
  };

  const loginStatusHandler = () => {
    if (userToken != null) {
      setLoginStatus(true);
    }
  };

  const getUserWishlistMovies = async () => {
    if (userToken != null) {
      const config = {
        method: "put",
        headers: {
          Authorization: userToken,
        },
      };
      const data = await axios(
        "http://localhost:8080/filmpage/getWishlist",
        config
      );
      return data.data;
    }
  };

  useEffect(() => {
    loginStatusHandler();
    const fetchAPI = async () => {
      setMovies(await getUserWishlistMovies());
    };
    fetchAPI();
  }, []);

  return (
    <CcRow>
      {loginStatus ? (
        movies.length != 0 ? (
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
