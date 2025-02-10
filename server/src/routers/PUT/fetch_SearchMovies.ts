import * as express from "express";
const router = express.Router();
const url: string = "https://api.themoviedb.org/3";
const imageUrl = "https://image.tmdb.org/t/p/original/";

router.put("/fetchTMDB/fetchSearchMovies", async (req, res) => {
  const { searchKey } = req.body;
  try {
    const searchUrl = `${url}/search/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&query=${searchKey}&page=1&include_adult=false`;
    const data = await fetch(searchUrl);
    const dataJson = await data.json();
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
    return res.json(dataNeeded);
  } catch (error) {
    console.log(error);
  }
});

export { router as fetchSearchMovies };
