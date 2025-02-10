import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import FullScreenCarousel from "../../components/FullScreenCarousel/FullScreenCarousel";
import GenreButton from "../../components/GenreButton/GenreButton";
import SwiperComp from "../../components/SwiperComp/SwiperCompV6";
import styled from "styled-components";
import PropTypes from "prop-types";

import {
  fecthNowPlayingMovies,
  fetchGenres,
  fetchMovieByGenre,
  fecthPopularMovies,
  fetchUpcomingMovies,
} from "../../service/fetchData_Axios";

const H1 = styled.h1`
  color: #f4c10f;
  font-size: 2rem;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Home = ({ scrollToTop }) => {
  const [nowM, setNowM] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [popM, setPopM] = useState([]);
  const [upM, setUpM] = useState([]);

  Home.propTypes = {
    scrollToTop: PropTypes.func,
  };

  useEffect(() => {
    const fetchAPI = async () => {
      setNowM(await fecthNowPlayingMovies());
      setGenres(await fetchGenres());
      setMovieByGenre(await fetchMovieByGenre(28));
      setPopM(await fecthPopularMovies());
      setUpM(await fetchUpcomingMovies());
    };
    fetchAPI();
  }, []);

  const handleGenreClick = async (genre_id) => {
    setMovieByGenre(await fetchMovieByGenre(genre_id));
  };

  const nowPlayingMovies = nowM.slice(0, 5);

  return (
    <div>
      <Row
        align="middle"
        justify="center"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <Col span={24} style={{ height: "64px" }}></Col>
        <Col span={22} style={{ margin: "0.5rem 1rem" }} data-testid="carousel">
          <FullScreenCarousel nowPlayingMovies={nowPlayingMovies} />
        </Col>
        <Col span={22} style={{ margin: "1rem" }} data-testid="genreButton">
          <GenreButton genres={genres} handleGenreClick={handleGenreClick} />
        </Col>
        <Col span={22} style={{ margin: "1rem" }} data-testid="moviesByGenre">
          <H1>Here you go</H1>
          <SwiperComp items={movieByGenre} scrollToTop={scrollToTop} />
        </Col>
        <Col span={22} style={{ margin: "1rem" }} data-testid="popularMovies">
          <H1>What hot this week</H1>
          <SwiperComp items={popM} scrollToTop={scrollToTop} />
        </Col>
        <Col
          span={22}
          style={{ margin: "1rem" }}
          data-testid="nowPlayingMovies"
        >
          <H1>Now Playing movies</H1>
          <SwiperComp items={nowM} scrollToTop={scrollToTop} />
        </Col>
        <Col span={22} style={{ margin: "1rem" }} data-testid="upComingMovies">
          <H1>Upcoming movies</H1>
          <SwiperComp items={upM} scrollToTop={scrollToTop} />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
