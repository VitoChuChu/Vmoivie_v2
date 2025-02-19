import React, { useState, useEffect } from "react";
import { Col } from "antd";
import {
  CenterCenterRow,
  CenterCenterCol,
} from "../../components/atoms/grid/grid";
import { StyledH1 } from "../../components/atoms/text/text";
import FullScreenCarousel from "../../components/compose/FullScreenCarousel/FullScreenCarousel";
import GenreButton from "../../components/compose/GenreButton/GenreButton";
import SwiperComp from "../../components/compose/SwiperComp/SwiperCompV6";
import {
  fetchNowPlayingMovies,
  fetchGenres,
  fetchMovieByGenre,
  fetchPopularMovies,
  fetchUpcomingMovies,
} from "../../service/TMDB_API";

import { Movie, Genre } from "../../interface/movie";

interface HomeProps {
  scrollToTop: () => void;
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

  const colStyle = {
    padding: "0 2vw",
  };

  return (
    <CenterCenterRow wrap={true}>
      <CenterCenterCol span={24}>
        <FullScreenCarousel nowPlayingMovies={nowPlayingMovies} />
      </CenterCenterCol>
      <Col span={24} style={colStyle}>
        <GenreButton genres={genres} handleGenreClick={handleGenreClick} />
      </Col>
      <CenterCenterCol span={24} style={colStyle}>
        <StyledH1>Here you go</StyledH1>
        <SwiperComp items={movieByGenre} scrollToTop={scrollToTop} />
      </CenterCenterCol>
      <CenterCenterCol span={24} style={colStyle}>
        <StyledH1>What hot this week</StyledH1>
        <SwiperComp items={popM} scrollToTop={scrollToTop} />
      </CenterCenterCol>
      <CenterCenterCol span={24} style={colStyle}>
        <StyledH1>Now Playing movies</StyledH1>
        <SwiperComp items={nowM} scrollToTop={scrollToTop} />
      </CenterCenterCol>
      <CenterCenterCol span={24} style={colStyle}>
        <StyledH1>Upcoming movies</StyledH1>
        <SwiperComp items={upM} scrollToTop={scrollToTop} />
      </CenterCenterCol>
    </CenterCenterRow>
  );
};

export default Home;
