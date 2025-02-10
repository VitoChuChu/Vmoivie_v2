import * as express from "express";
import { Request, Response } from "express";

const router = express.Router();
const url = "https://api.themoviedb.org/3";
const movieUrl = `${url}/movie`;

router.put(
  "/fetchTMDB/fetchMovieDetail",
  async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
      const url = `${movieUrl}/${id}?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`;
      const data = await fetch(url);
      const dataJson = await data.json();
      return res.json(dataJson);
    } catch (error) {
      console.log(error);
    }
  }
);

export { router as fetchMovieDetail };
