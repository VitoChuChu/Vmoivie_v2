import * as express from "express";
import { Wishlist } from "../../entities/Wishlist";
import { AppDataSource } from "../../data-source";
import * as jwt from "jsonwebtoken";

const router = express.Router();

interface JwtPayload {
  id: string;
  name: string;
  email: string;
}
router.put("/filmpage/chechWishlist", async (req, res) => {
  const userToken: string | undefined = req.headers["authorization"];
  const { movieID } = req.body;
  if (userToken?.length === 4) {
    res.json("No data of wishlist");
  } else {
    const currentUser = jwt.verify(
      userToken as string,
      process.env.JWT_SECRET_ACCESS_KEY as string
    ) as JwtPayload;
    try {
      const chechWishlist = await AppDataSource.getRepository(Wishlist)
        .createQueryBuilder()
        .select("wishlist")
        .from(Wishlist, "wishlist")
        .where("wishlist.userID = :userID AND wishlist.movieID = :movieID", {
          userID: currentUser.id,
          movieID: movieID,
        })
        .getOne();
      res.json(chechWishlist);
    } catch (error) {
      res.json(error);
    }
  }
});
export { router as chechWishlist };
