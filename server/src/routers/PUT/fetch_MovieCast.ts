import * as express from "express";
import { Request, Response } from "express";

const router = express.Router();
const url: string = "https://api.themoviedb.org/3";

router.put("/fetchTMDB/fetchMovieCast", async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const CastUrl = `${url}/movie/${id}/credits?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`;
    const data = await fetch(CastUrl);
    const dataJson = await data.json();
    const dataCast = dataJson.cast;
    const dataNeeded = dataCast.map((c: { [index: string]: string }) => ({
      id: c.cast_id,
      name: c.name,
      character: c.character,
      profile_path: "https://image.tmdb.org/t/p/w200/" + c.profile_path,
    }));
    return res.json(dataNeeded);
  } catch (error) {
    console.log(error);
  }
});

export { router as fetchMovieCast };
