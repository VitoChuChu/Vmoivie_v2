import * as express from "express";
import { Request, Response } from "express";

const router = express.Router();
const url: string = "https://api.themoviedb.org/3";
const moviesUrl: string = `${url}/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en_US&page=1&with_genres=`;
const imageUrl: string = "https://image.tmdb.org/t/p/original/";
const imageUrlPos_low: string = "https://image.tmdb.org/t/p/w500/";

router.put(
  "/fetchTMDB/fetchMoviesByGenres",
  async (req: Request, res: Response) => {
    const { genre_id } = req.body;
    try {
      const Url = moviesUrl + genre_id;
      const data = await fetch(Url);
      const dataJson = await data.json();
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
      return res.json(dataNeeded);
    } catch (error) {
      console.log(error);
    }
  }
);

export { router as fetchMoviesByGenres };
