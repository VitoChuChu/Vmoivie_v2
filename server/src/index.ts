import { AppDataSource } from "./data-source";
import express from "express";
import { Express } from "express";
import cors from "cors";
// GET
// POST
import { userRegister } from "./routers/POST/userRegister";
import { userLogin } from "./routers/POST/userLogin";
import { addUserWishlist } from "./routers/POST/post_addUserWishlist";
import { chechWishlist } from "./routers/POST/put_chechWishlist";
// PUT
import { getWishlist } from "./routers/PUT/put_UserWIshlist";
// DELETE
import { removeUserWishlist } from "./routers/DELETE/delete_removeUserWishlist";

// TMDB fetch
import { fetchNowPlayingMovies } from "./routers/GET/fetch_NowPlayMovies";
import { fetchGenerList } from "./routers/GET/fetch_GenreList";
import { fetchPopularMovies } from "./routers/GET/fetch_PopularMovies";
import { fetchUpcomingMovies } from "./routers/GET/fetch_UpcomingMovies";
import { fetchMoviesByGenres } from "./routers/PUT/fetch_MoviesByGenres";
import { fetchMovieDetail } from "./routers/PUT/fetch_MovieDetail";
import { fetchMovieVideo } from "./routers/PUT/fetch_MovieVideo";
import { fetchMovieCast } from "./routers/PUT/fetch_MovieCast";
import { fetchSimilarMovies } from "./routers/PUT/fetch_SimilarMovies";
import { fetchSearchMovies } from "./routers/PUT/fetch_SearchMovies";

const app: Express = express();
app.use(express.json());
app.use(cors());

AppDataSource.initialize()
  .then(async () => {
    app.use(userRegister);
    app.use(userLogin);
    app.use(getWishlist);
    app.use(addUserWishlist);
    app.use(removeUserWishlist);
    app.use(chechWishlist);

    // TMDB fetch
    app.use(fetchNowPlayingMovies);
    app.use(fetchGenerList);
    app.use(fetchMoviesByGenres);
    app.use(fetchPopularMovies);
    app.use(fetchUpcomingMovies);
    app.use(fetchMovieDetail);
    app.use(fetchMovieVideo);
    app.use(fetchMovieCast);
    app.use(fetchSimilarMovies);
    app.use(fetchSearchMovies);

    app.listen("8080", () => {
      console.log("Server is running on port 8080");
    });
  })
  .catch((error) => console.log(error));
