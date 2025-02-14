import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import FullScreenCarousel from "../../components/compose/FullScreenCarousel/FullScreenCarousel";
import GenreButton from "../../components/compose/GenreButton/GenreButton";
import SwiperComp from "../../components/compose/SwiperComp/SwiperCompV6";
import styled from "styled-components";

import {
  fetchNowPlayingMovies,
  fetchGenres,
  fetchMovieByGenre,
  fetchPopularMovies,
  fetchUpcomingMovies,
} from "../../service/TMDB_API";

const H1 = styled.h1`
  color: #f4c10f;
  font-size: 2rem;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

interface HomeProps {
  scrollToTop: () => void;
}

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  release_date: string;
}

interface Genre {
  id: number;
  name: string;
}

const Home: React.FC<HomeProps> = ({ scrollToTop }) => {
  const [nowM, setNowM] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [movieByGenre, setMovieByGenre] = useState<Movie[]>([]);
  const [popM, setPopM] = useState<Movie[]>([]);
  const [upM, setUpM] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setNowM(await fetchNowPlayingMovies());
      setGenres(await fetchGenres());
      setMovieByGenre(await fetchMovieByGenre(28));
      setPopM(await fetchPopularMovies());
      setUpM(await fetchUpcomingMovies());
    };
    fetchAPI();
  }, []);

  const handleGenreClick = async (genre_id: number) => {
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
