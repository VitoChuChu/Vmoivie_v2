import { CustomError } from "../middleware/errorHandler";
import { injectable } from "tsyringe";

const url: string = "https://api.themoviedb.org/3";
const imageUrl: string = "https://image.tmdb.org/t/p/original/";
const imageUrlPos_low: string = "https://image.tmdb.org/t/p/w500/";

@injectable()
export default class TmdbServices {
  /**
   * @summary 取得TMDB API的generList
   * @param
   * @returns
   */
  public async fetchGenerList(): Promise<any> {
    const genreUrl: string = `${url}/genre/movie/list?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`;
    const data = await fetch(genreUrl);
    const dataJson = await data.json();
    const dataResult = dataJson.genres;
    return dataResult;
  }

  public async fetchNowPlayingMovies(): Promise<any> {
    const nowPlayingUrl: string = `${url}/movie/now_playing?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1&region=TW`;
    const data = await fetch(nowPlayingUrl);
    const dataJson = await data.json();
    const dataResult = dataJson.results;
    const dataNeeded: { [index: string]: string } = dataResult.map(
      (m: { [index: string]: string }) => ({
        id: m.id,
        title: m.title,
        backdrop_path: imageUrl + m.backdrop_path,
        poster_path: imageUrlPos_low + m.poster_path,
        overview: m.overview,
        vote_average: m.vote_average,
        release_date: m.release_date,
      })
    );
    return dataNeeded;
  }

  public async fetchPopularMovies(): Promise<any> {
    const popularUrl: string = `${url}/movie/popular?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1&region=TW`;
    const data = await fetch(popularUrl);
    const dataJson = await data.json();
    const dataResult = dataJson.results;
    const dataNeeded: { [index: string]: string } = dataResult.map(
      (m: { [index: string]: string }) => ({
        id: m.id,
        title: m.title,
        backdrop_path: imageUrl + m.backdrop_path,
        poster_path: imageUrlPos_low + m.poster_path,
        overview: m.overview,
        vote_average: m.vote_average,
        release_date: m.release_date,
      })
    );
    return dataNeeded;
  }

  public async fetchUpcomingMovies(): Promise<any> {
    const upComingUrl: string = `${url}/movie/upcoming?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1&region=TW`;
    const data = await fetch(upComingUrl);
    const dataJson = await data.json();
    if (dataJson.success === false) return dataJson.status_message;
    const dataResult = dataJson.results;
    const dataNeeded: { [index: string]: string } = dataResult.map(
      (m: { [index: string]: string }) => ({
        id: m.id,
        title: m.title,
        backdrop_path: imageUrl + m.backdrop_path,
        poster_path: imageUrlPos_low + m.poster_path,
        overview: m.overview,
        vote_average: m.vote_average,
        release_date: m.release_date,
      })
    );
    return dataNeeded;
  }

  public async fetchMovieCast(id: number): Promise<any> {
    const CastUrl = `${url}/movie/${id}/credits?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`;
    const data = await fetch(CastUrl);
    const dataJson = await data.json();
    if (dataJson.success === false) return dataJson.status_message;
    const dataCast = dataJson.cast;
    const dataNeeded = dataCast.map((c: { [index: string]: string }) => ({
      id: c.cast_id,
      name: c.name,
      character: c.character,
      profile_path: imageUrl + c.profile_path,
    }));
    return dataNeeded;
  }

  public async fetchMovieDetail(id: number): Promise<any> {
    const movieUrl = `${url}/movie/${id}?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`;
    const data = await fetch(movieUrl);
    const dataJson = await data.json();
    if (dataJson.success === false) return dataJson.status_message;
    const dataResult = {
      id: dataJson.id,
      title: dataJson.title,
      backdrop_path: imageUrl + dataJson.backdrop_path,
      poster_path: imageUrlPos_low + dataJson.poster_path,
      overview: dataJson.overview,
      vote_average: dataJson.vote_average,
      release_date: dataJson.release_date,
      genres: dataJson.genres,
      runtime: dataJson.runtime,
      status: dataJson.status,
    };
    return dataResult;
  }

  public async fetchMoviesByGenres(genre_id: number): Promise<any> {
    const moviesUrl: string = `${url}/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en_US&page=1&with_genres=${genre_id}`;
    const data = await fetch(moviesUrl);
    const dataJson = await data.json();
    if (dataJson.success === false) return dataJson.status_message;
    const dataResult = dataJson.results;
    const dataNeeded = dataResult.map((m: { [index: string]: string }) => ({
      id: m.id,
      title: m.title,
      backdrop_path: imageUrl + m.backdrop_path,
      poster_path: imageUrlPos_low + m.poster_path,
      overview: m.overview,
      vote_average: m.vote_average,
      release_date: m.release_date,
    }));
    return dataNeeded;
  }

  public async fetchMovieVideo(id: number): Promise<any> {
    const videoUrl = `${url}/movie/${id}/videos?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`;
    const data = await fetch(videoUrl);
    const dataJson = await data.json();
    if (dataJson.success === false) return dataJson.status_message;
    const dataResult = dataJson.results;
    return dataResult;
  }

  public async fetchSearchMovies(searchKey: string): Promise<any> {
    const searchUrl = `${url}/search/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&query=${searchKey}&page=1&include_adult=false`;
    const data = await fetch(searchUrl);
    const dataJson = await data.json();
    if (dataJson.success === false) return dataJson.status_message;
    const dataResult = dataJson.results;
    const dataNeeded = dataResult.map((m: { [index: string]: string }) => ({
      id: m.id,
      title: m.title,
      backdrop_path: imageUrl + m.backdrop_path,
      poster_path: imageUrl + m.poster_path,
      overview: m.overview,
      vote_average: m.vote_average,
      release_date: m.release_date,
    }));
    return dataNeeded;
  }

  public async fetchSimilarMovies(id: number): Promise<any> {
    const similarMoviesUrl = `${url}/movie/${id}/similar?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`;
    const data = await fetch(similarMoviesUrl);
    const dataJson = await data.json();
    if (dataJson.success === false) return dataJson.status_message;
    const dataResult = dataJson.results;
    const dataNeeded = dataResult.map((m: { [index: string]: string }) => ({
      id: m.id,
      title: m.title,
      backdrop_path: imageUrl + m.backdrop_path,
      poster_path: imageUrlPos_low + m.poster_path,
      overview: m.overview,
      vote_average: m.vote_average,
      release_date: m.release_date,
    }));
    return dataNeeded;
  }
}
