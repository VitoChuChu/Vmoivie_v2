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

router.post("/filmpage/addUserWishlist", async (req, res) => {
  const userToken: string | undefined = req.headers["authorization"];
  const {
    movieID,
    title,
    release_date,
    poster_path,
  }: { [index: string]: string } = req.body;
  const imageUrlPos_low: string = "https://image.tmdb.org/t/p/w500/";
  const currentUser = jwt.verify(
    userToken as string,
    process.env.JWT_SECRET_ACCESS_KEY as string
  ) as JwtPayload;
  try {
    const addUserWishlist = await AppDataSource.getRepository(Wishlist)
      .createQueryBuilder()
      .insert()
      .into(Wishlist)
      .values({
        userID: currentUser.id,
        movieID: movieID,
        title: title,
        releaseDate: release_date,
        posterPath: imageUrlPos_low + poster_path,
      })
      .execute();
    res.status(200).json("Add movie to wishlist succeed");
  } catch (error) {
    res.status(400).json(error);
  }
});
export { router as addUserWishlist };
