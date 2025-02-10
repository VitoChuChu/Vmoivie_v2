import * as express from "express";
import { Request, Response } from "express";

const router = express.Router();
const url = "https://api.themoviedb.org/3";

router.put(
  "/fetchTMDB/fetchMovieVideo",
  async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
      const videoUrl = `${url}/movie/${id}/videos?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`;
      const data = await fetch(videoUrl);
      const dataJson = await data.json();
      const dataResult = dataJson.results;
      return res.json(dataResult);
    } catch (error) {
      console.log(error);
    }
  }
);

export { router as fetchMovieVideo };
