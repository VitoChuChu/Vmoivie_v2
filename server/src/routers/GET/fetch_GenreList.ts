import * as express from "express";
import { Request, Response } from "express";
const router = express.Router();
const url: string = "https://api.themoviedb.org/3";
const genreUrl: string = `${url}/genre/movie/list?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`;

router.get("/fetchTMDB/fetchGenerList", async (req: Request, res: Response) => {
  try {
    const data = await fetch(genreUrl);
    const dataJson = await data.json();
    const dataResult: { [index: string]: string } = dataJson.genres;
    return res.status(200).json(dataResult);
  } catch (error) {
    console.log(error);
  }
});

export { router as fetchGenerList };
