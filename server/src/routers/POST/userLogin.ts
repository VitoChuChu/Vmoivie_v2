require("dotenv").config();
import * as express from "express";
import { Request, Response } from "express";
import * as bcrypt from "bcrypt";
import { User } from "../../entities/User";
import { AppDataSource } from "../../data-source";

const router = express.Router();
const jwt = require("jsonwebtoken");

// Type area
interface UserType {
  userID: string;
  userName: string;
  userEmail: string;
  password: string;
  joinDate: Date;
}

router.post("/login", async (req: Request, res: Response) => {
  const { enterEmail, enterPassword }: { [index: string]: string } = req.body;
  if (!enterEmail || !enterPassword) {
    return res.status(400).json("Please enter the form submission.");
  } else {
    try {
      const user: UserType | null = await AppDataSource.getRepository(User)
        .createQueryBuilder()
        .select("user")
        .from(User, "user")
        .where("user.userEmail = :enterEmail", { enterEmail: enterEmail })
        .getOne();
      if (user === null) {
        res.status(400).json("Information incorrect.");
      } else {
        const isValid: boolean = bcrypt.compareSync(
          enterPassword,
          user.password
        );
        if (isValid) {
          const payload: { [index: string]: string } = {
            id: user.userID,
            name: user.userName,
            email: user.userEmail,
          };
          const accessToken: string = jwt.sign(
            payload,
            process.env.JWT_SECRET_ACCESS_KEY,
            {
              expiresIn: "8h",
            }
          );
          return res.status(200).json({
            accessToken: accessToken,
            userID: user.userID,
            userName: user.userName,
          });
        } else {
          res.status(400).json("Information incorrect.");
        }
      }
    } catch (error) {
      res.status(400).json(error);
    }
  }
});
export { router as userLogin };
