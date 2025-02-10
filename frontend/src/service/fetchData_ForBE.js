const url = "https://api.themoviedb.org/3";
const imageUrl = "https://image.tmdb.org/t/p/original/";
const imageUrlPos_low = "https://image.tmdb.org/t/p/w500/";

export const fecthNowPlayingMovies = async () => {
  try {
    const data = await fetch(
      "http://localhost:8080/fetchTMDB/fetchNowPlayingMovies"
    );
    const dataJson = await data.json();
    return dataJson;
  } catch (error) {
    console.log(error);
  }
};

export const fetchGenres = async () => {
  try {
    const data = await fetch("http://localhost:8080/fetchTMDB/fetchGenerList");
    const dataJson = await data.json();
    return dataJson;
  } catch (error) {
    console.log(error);
  }
};

export const fecthPopularMovies = async () => {
  try {
    const data = await fetch(
      "http://localhost:8080/fetchTMDB/fetchPopularMovies"
    );
    const dataJson = await data.json();
    return dataJson;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUpcomingMovies = async () => {
  try {
    const data = await fetch(
      "http://localhost:8080/fetchTMDB/fetchUpcomingMovies"
    );
    const dataJson = await data.json();
    return dataJson;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieByGenre = async (genre_id) => {
  try {
    const data = await fetch(
      "http://localhost:8080/fetchTMDB/fetchMoviesByGenres",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          genre_id: genre_id,
        }),
      }
    );
    const dataJson = await data.json();
    return dataJson;
  } catch (error) {
    console.log(error);
  }
};

// !還沒改
export const fetchTopRatedMovies = async (page) => {
  try {
    const topRatedUrl = `${url}/movie/top_rated?api_key=0256639a2d7d7afd446f8a3d2dcc94b1&language=en-US&page=${page}&region=TW`;
    const imageUrlLow = "https://image.tmdb.org/t/p/w300/";
    const data = await fetch(topRatedUrl);
    const dataJson = await data.json();
    const dataResult = dataJson.results;
    const dataNeeded = dataResult.map((m) => ({
      id: m.id,
      title: m.title,
      backdrop_path: imageUrl + m.backdrop_path,
      backdrop_path_low: imageUrlLow + m.backdrop_path,
      poster_path: imageUrlPos_low + m.poster_path,
      overview: m.overview,
      vote_average: m.vote_average,
      release_date: m.release_date,
    }));
    return dataNeeded;
  } catch (error) {
    console.log(error);
  }
};
// !還沒改

export const fetchMovieDetail = async (id) => {
  try {
    const data = await fetch(
      "http://localhost:8080/fetchTMDB/fetchMovieDetail",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      }
    );
    const dataJson = await data.json();
    return dataJson;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieVideos = async (id) => {
  try {
    const data = await fetch(
      "http://localhost:8080/fetchTMDB/fetchMovieVideo",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      }
    );
    const dataJson = await data.json();
    return dataJson[0];
  } catch (error) {
    console.log(error);
    return;
  }
};

export const fetchMovieCast = async (id) => {
  try {
    const data = await fetch("http://localhost:8080/fetchTMDB/fetchMovieCast", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    const dataJson = await data.json();
    return dataJson;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSimilarMovies = async (id) => {
  try {
    const data = await fetch(
      "http://localhost:8080/fetchTMDB/fetchSimilarMovies",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      }
    );
    const dataJson = await data.json();
    return dataJson;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearchMovies = async (searchKey) => {
  try {
    const data = await fetch(
      "http://localhost:8080/fetchTMDB/fetchSimilarMovies",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          searchKey: searchKey,
        }),
      }
    );
    const dataJson = await data.json();
    return dataJson;
  } catch (error) {
    console.log(error);
  }
};
