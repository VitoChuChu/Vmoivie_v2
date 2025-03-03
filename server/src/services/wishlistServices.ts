import { injectable } from "tsyringe";
import { UserType } from "../interface/user";
import WishtlistDao from "../dao/wishlistDao";

@injectable()
export default class WishtlistServices {
  constructor(private wishlistDao: WishtlistDao) {
    this.wishlistDao = wishlistDao;
  }
  /**
   * @summary 確認電影是否在使用者的收藏清單中
   * @param
   * @returns
   */
  public async checkWishlist(
    userID: string,
    movieID: number
  ): Promise<boolean> {
    const result = await this.wishlistDao.checkWishlist(userID, movieID);
    return result;
  }

  /**
   * @summary 取得使用者的收藏清單
   * @param
   * @returns
   */
  public async getWishlist(userID: string): Promise<any> {
    const result = await this.wishlistDao.getWishlist(userID);
    return result;
  }

  /**
   * @summary 新增使用者的收藏清單
   * @param
   * @returns
   */
  public async addUserWishlist(
    userID: string,
    movieID: string,
    title: string,
    releaseDate: string,
    posterPath: string
  ): Promise<string> {
    await this.wishlistDao.addUserWishlist(
      userID,
      movieID,
      title,
      releaseDate,
      posterPath
    );
    return "Add movie to wishlist succeed";
  }

  /**
   * @summary 移除使用者的收藏清單
   * @param
   * @returns
   */
  public async removeUserWishlist(
    userID: string,
    movieID: string
  ): Promise<string> {
    await this.wishlistDao.removeUserWishlist(userID, movieID);
    return "Remove movie from wishlist succeed";
  }
}
