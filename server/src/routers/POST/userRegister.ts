require("dotenv").config();
import * as express from "express";
import { Request, Response } from "express";
import * as bcrypt from "bcrypt";
import { User } from "../../entities/User";

const router = express.Router();
const jwt = require("jsonwebtoken");

// Type area
interface UserType {
  userID: string;
  userName: string;
  userEmail: string;
  password: string;
  save: Function;
}

router.post("/register", async (req: Request, res: Response) => {
  const { userName, userEmail, userPassword }: { [index: string]: string } =
    req.body;
  if (!userName || !userEmail || !userPassword) {
    return res.status(400).json("Please enter the form submission.");
  } else {
    try {
      const hash: string = bcrypt.hashSync(userPassword, 10);
      const user: UserType = User.create({
        userName: userName,
        userEmail: userEmail,
        password: hash,
      });
      await user.save();
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
    } catch (error) {
      res.json("User exist");
    }
  }
});

export { router as userRegister };
