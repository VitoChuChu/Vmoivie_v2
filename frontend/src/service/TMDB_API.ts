import { fetchData } from "../utils/FetchData";
import { Movie, MovieDetail, Genre } from "../interface/movie";

export const fetchNowPlayingMovies = async (): Promise<Movie[]> => {
  return await fetchData({ url: "fetchNowPlayingMovies" });
};

export const fetchGenres = async (): Promise<Genre[]> => {
  return await fetchData({ url: "fetchGenerList" });
};

export const fetchPopularMovies = async (): Promise<Movie[]> => {
  return await fetchData({ url: "fetchPopularMovies" });
};

export const fetchUpcomingMovies = async (): Promise<Movie[]> => {
  return await fetchData({ url: "fetchUpcomingMovies" });
};

export const fetchMovieByGenre = async (genre_id: number): Promise<Movie[]> => {
  return await fetchData({
    url: "fetchMoviesByGenres",
    method: "put",
    data: { genre_id },
  });
};

export const fetchMovieDetail = async (id: number): Promise<MovieDetail> => {
  return await fetchData({
    url: "fetchMovieDetail",
    method: "put",
    data: { id },
  });
};

export const fetchMovieVideos = async (id: number): Promise<any> => {
  const data = await fetchData({
    url: "fetchMovieVideo",
    method: "put",
    data: { id },
  });
  return data[0];
};

export const fetchMovieCast = async (id: number): Promise<any> => {
  return await fetchData({
    url: "fetchMovieCast",
    method: "put",
    data: { id },
  });
};

export const fetchSimilarMovies = async (
  id: number
): Promise<MovieDetail[]> => {
  return await fetchData({
    url: "fetchSimilarMovies",
    method: "put",
    data: { id },
  });
};

export const fetchSearchMovies = async (
  searchKey: string
): Promise<Movie[]> => {
  return await fetchData({
    url: "fetchSimilarMovies",
    method: "put",
    data: { searchKey },
  });
};
