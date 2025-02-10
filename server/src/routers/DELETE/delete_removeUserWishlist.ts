import * as express from "express";
import * as jwt from "jsonwebtoken";
import { Wishlist } from "../../entities/Wishlist";
import { AppDataSource } from "../../data-source";

const router = express.Router();

interface JwtPayload {
  id: string;
  name: string;
  email: string;
}

router.delete("/filmpage/removeUserWishlist", async (req, res) => {
  const userToken: string | undefined = req.headers["authorization"];
  const { movieID }: { [index: string]: string } = req.body;
  const currentUser = jwt.verify(
    userToken as string,
    process.env.JWT_SECRET_ACCESS_KEY as string
  ) as JwtPayload;
  try {
    const removeUserWishlist = await AppDataSource.getRepository(Wishlist)
      .createQueryBuilder()
      .delete()
      .from(Wishlist)
      .where("userID = :userID AND movieID = :movieID", {
        userID: currentUser.id,
        movieID: movieID,
      })
      .execute();
    res.json("Remove the movie from wishlist succeed");
  } catch (error) {
    res.json(error);
  }
});
export { router as removeUserWishlist };
