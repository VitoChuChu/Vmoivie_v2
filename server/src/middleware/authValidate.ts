import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authValidate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userToken: string | undefined = req.headers["authorization"];
  if (!userToken) return res.status(401).json("Access denied");
  try {
    const currentUser = jwt.verify(
      userToken as string,
      process.env.JWT_SECRET_ACCESS_KEY as string
    );
    req.body.currentUser = currentUser;
    next();
  } catch (error) {
    return res.status(400).json("Invalid token");
  }
};
