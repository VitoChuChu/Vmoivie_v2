import axios from "axios";

export const fecthNowPlayingMovies = async () => {
  try {
    const data = await axios(
      "http://localhost:8080/fetchTMDB/fetchNowPlayingMovies"
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchGenres = async () => {
  try {
    const data = await axios("http://localhost:8080/fetchTMDB/fetchGenerList");
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const fecthPopularMovies = async () => {
  try {
    const data = await axios(
      "http://localhost:8080/fetchTMDB/fetchPopularMovies"
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUpcomingMovies = async () => {
  try {
    const data = await axios(
      "http://localhost:8080/fetchTMDB/fetchUpcomingMovies"
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieByGenre = async (genre_id) => {
  try {
    const config = {
      genre_id: genre_id,
    };
    const data = await axios.put(
      "http://localhost:8080/fetchTMDB/fetchMoviesByGenres",
      config
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetail = async (id) => {
  try {
    const config = {
      id: id,
    };
    const data = await axios.put(
      "http://localhost:8080/fetchTMDB/fetchMovieDetail",
      config
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieVideos = async (id) => {
  try {
    const config = {
      id: id,
    };
    const data = await axios.put(
      "http://localhost:8080/fetchTMDB/fetchMovieVideo",
      config
    );
    return data.data[0];
  } catch (error) {
    console.log(error);
    return;
  }
};

export const fetchMovieCast = async (id) => {
  try {
    const config = {
      id: id,
    };
    const data = await axios.put(
      "http://localhost:8080/fetchTMDB/fetchMovieCast",
      config
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSimilarMovies = async (id) => {
  try {
    const config = {
      id: id,
    };
    const data = await axios.put(
      "http://localhost:8080/fetchTMDB/fetchSimilarMovies",
      config
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearchMovies = async (searchKey) => {
  try {
    const config = {
      searchKey: searchKey,
    };
    const data = await axios.put(
      "http://localhost:8080/fetchTMDB/fetchSimilarMovies",
      config
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
