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

router.put("/filmpage/getWishlist", async (req, res) => {
  const userToken: string | undefined = req.headers["authorization"];
  const currentUser = jwt.verify(
    userToken as string,
    process.env.JWT_SECRET_ACCESS_KEY as string
  ) as JwtPayload;
  try {
    const userWishlist = await AppDataSource.getRepository(Wishlist)
      .createQueryBuilder()
      .select("wishlist")
      .from(Wishlist, "wishlist")
      .where("wishlist.userID = :userID", { userID: currentUser.id })
      .getMany();
    res.json(userWishlist);
  } catch (error) {
    res.json(error);
  }
});
export { router as getWishlist };
