import { Route, Tags, Post, Controller, Request, Delete } from "tsoa";
import { injectable } from "tsyringe";
import WishtlistServices from "../services/wishlistServices";
import { WishlistType } from "../interface/wishlist";

@Route("db")
@Tags("Wishtlist")
@injectable()
export class WishtlistController extends Controller {
  constructor(private wishlistServices: WishtlistServices) {
    super();
  }
  /**
   * @summary Fetch Similar Movies
   * @param id Movie ID
   * @returns List of similar movies
   */
  @Post("checkWishlist")
  public async fetchSimilarMovies(@Request() req: any): Promise<any> {
    const { userID, movieID } = req.body;
    const result = await this.wishlistServices.checkWishlist(userID, movieID);
    return result;
  }

  @Post("getWishlist")
  public async getWishlist(@Request() req: any): Promise<any> {
    const { userID } = req.body;
    const result = await this.wishlistServices.getWishlist(userID);
    return result;
  }

  @Post("addUserWishlist")
  public async addUserWishlist(@Request() req: any): Promise<any> {
    const userID = req.body.userID;
    const { movieID, title, release_date, poster_path }: WishlistType =
      req.body.movieConfig;
    const result = await this.wishlistServices.addUserWishlist(
      userID,
      movieID,
      title,
      release_date,
      poster_path
    );
    return result;
  }

  @Delete("removeUserWishlist")
  public async removeUserWishlist(@Request() req: any): Promise<any> {
    const { userID, movieID } = req.body;
    const result = await this.wishlistServices.removeUserWishlist(
      userID,
      movieID
    );
    return result;
  }
}
