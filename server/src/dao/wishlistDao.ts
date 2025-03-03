import { Wishlist } from "../models/Wishlist";
import { AppDataSource } from "../data-source";

export default class WishtlistDao {
  /**
   * 確認電影是否在使用者的收藏清單中
   * @param userID
   * @param movieID
   * @returns boolean
   */
  public async checkWishlist(
    userID: string,
    movieID: number
  ): Promise<boolean> {
    const chechWishlist = await AppDataSource.getRepository(Wishlist)
      .createQueryBuilder()
      .select("wishlist")
      .from(Wishlist, "wishlist")
      .where("wishlist.userID = :userID AND wishlist.movieID = :movieID", {
        userID: userID,
        movieID: movieID,
      })
      .getOne();
    if (!chechWishlist) return false;
    return true;
  }

  /**
   * 取得使用者的收藏清單
   * @param userID
   * @returns Wishlist[]
   */
  public async getWishlist(userID: string): Promise<Wishlist[]> {
    const userWishlist = await AppDataSource.getRepository(Wishlist)
      .createQueryBuilder()
      .select("wishlist")
      .from(Wishlist, "wishlist")
      .where("wishlist.userID = :userID", { userID: userID })
      .getMany();
    return userWishlist;
  }

  /**
   * 新增使用者的收藏清單
   * @param userID
   * @param movieID
   * @param title
   * @param releaseDate
   * @param posterPath
   * @returns void
   */
  public async addUserWishlist(
    userID: string,
    movieID: string,
    title: string,
    releaseDate: string,
    posterPath: string
  ): Promise<void> {
    await AppDataSource.getRepository(Wishlist)
      .createQueryBuilder()
      .insert()
      .into(Wishlist)
      .values({
        userID: userID,
        movieID: movieID,
        title: title,
        releaseDate: releaseDate,
        posterPath: posterPath,
      })
      .execute();
  }

  /**
   * 移除使用者的收藏清單
   * @param userID
   * @param movieID
   * @returns void
   */
  public async removeUserWishlist(
    userID: string,
    movieID: string
  ): Promise<void> {
    await AppDataSource.getRepository(Wishlist)
      .createQueryBuilder()
      .delete()
      .from(Wishlist)
      .where("userID = :userID AND movieID = :movieID", {
        userID: userID,
        movieID: movieID,
      })
      .execute();
  }
}
