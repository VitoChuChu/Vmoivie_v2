import { Route, Tags, Get, Post, Put, Path, Controller, Request } from "tsoa";
import { injectable } from "tsyringe";
import TmdbServices from "../services/tmdbServices";

@Route("tmdb")
@Tags("TMDB")
@injectable()
export class TmdbController extends Controller {
  constructor(private tmdbService: TmdbServices) {
    super();
  }

  /**
   * @summary Fetch Genre List
   * @returns List of genres
   */
  @Get("fetchGenerList")
  public async fetchGenerList(): Promise<any> {
    const result = await this.tmdbService.fetchGenerList();
    return result;
  }

  /**
   * @summary Fetch Now Playing Movies
   * @returns List of now playing movies
   */
  @Get("fetchNowPlayingMovies")
  public async fetchNowPlayingMovies(): Promise<any> {
    const result = await this.tmdbService.fetchNowPlayingMovies();
    return result;
  }

  /**
   * @summary Fetch Popular Movies
   * @returns List of popular movies
   */
  @Get("fetchPopularMovies")
  public async fetchPopularMovies(): Promise<any> {
    const result = await this.tmdbService.fetchPopularMovies();
    return result;
  }

  /**
   * @summary Fetch Upcoming Movies
   * @returns List of upcoming movies
   */
  @Get("fetchUpcomingMovies")
  public async fetchUpcomingMovies(): Promise<any> {
    const result = await this.tmdbService.fetchUpcomingMovies();
    return result;
  }

  /**
   * @summary Fetch Movie Cast
   * @param id Movie ID
   * @returns List of cast members
   */
  @Put("fetchMovieCast")
  public async fetchMovieCast(@Request() req: any): Promise<any> {
    const id = req.body.id;
    const result = await this.tmdbService.fetchMovieCast(id);
    return result;
  }

  /**
   * @summary Fetch Movie Detail
   * @param id Movie ID
   * @returns Movie details
   */
  @Put("fetchMovieDetail")
  public async fetchMovieDetail(@Request() req: any): Promise<any> {
    const id = req.body.id;
    const result = await this.tmdbService.fetchMovieDetail(id);
    return result;
  }

  /**
   * @summary Fetch Movies By Genres
   * @param genre_id Genre ID
   * @returns List of movies by genre
   */
  @Put("fetchMoviesByGenres")
  public async fetchMoviesByGenres(@Request() req: any): Promise<any> {
    const genre_id = req.body.genre_id;
    const result = await this.tmdbService.fetchMoviesByGenres(genre_id);
    return result;
  }

  /**
   * @summary Fetch Movie Video
   * @param id Movie ID
   * @returns Movie video
   */
  @Put("fetchMovieVideo")
  public async fetchMovieVideo(@Request() req: any): Promise<any> {
    const id = req.body.id;
    const result = await this.tmdbService.fetchMovieVideo(id);
    return result;
  }

  /**
   * @summary Fetch Search Movies
   * @param searchKey Search keyword
   * @returns List of movies matching the search keyword
   */
  @Put("fetchSearchMovies")
  public async fetchSearchMovies(@Request() req: any): Promise<any> {
    const searchKey = req.body.searchKey;
    const result = await this.tmdbService.fetchSearchMovies(searchKey);
    return result;
  }

  /**
   * @summary Fetch Similar Movies
   * @param id Movie ID
   * @returns List of similar movies
   */
  @Put("fetchSimilarMovies")
  public async fetchSimilarMovies(@Request() req: any): Promise<any> {
    const id = req.body.id;
    const result = await this.tmdbService.fetchSimilarMovies(id);
    return result;
  }
}
