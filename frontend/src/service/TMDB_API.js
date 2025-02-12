import { fetchData } from "../utils/FetchData";

export const fetchNowPlayingMovies = async () => {
  return await fetchData("fetchNowPlayingMovies");
};

export const fetchGenres = async () => {
  return await fetchData("fetchGenerList");
};

export const fetchPopularMovies = async () => {
  return await fetchData("fetchPopularMovies");
};

export const fetchUpcomingMovies = async () => {
  return await fetchData("fetchUpcomingMovies");
};

export const fetchMovieByGenre = async (genre_id) => {
  return await fetchData("fetchMoviesByGenres", "put", {
    genre_id,
  });
};

export const fetchMovieDetail = async (id) => {
  return await fetchData("fetchMovieDetail", "put", { id });
};

export const fetchMovieVideos = async (id) => {
  const data = await fetchData("fetchMovieVideo", "put", { id });
  return data[0];
};

export const fetchMovieCast = async (id) => {
  return await fetchData("fetchMovieCast", "put", { id });
};

export const fetchSimilarMovies = async (id) => {
  return await fetchData("fetchSimilarMovies", "put", { id });
};

export const fetchSearchMovies = async (searchKey) => {
  return await fetchData("fetchSimilarMovies", "put", {
    searchKey,
  });
};
