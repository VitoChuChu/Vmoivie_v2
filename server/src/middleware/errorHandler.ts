import { Request, Response, NextFunction } from "express";
import { ValidateError } from "tsoa";
import logger from "../utils/logger/logger";

export class UserError extends Error {
  constructor(message: string) {
    super(message);
    this.message = message;
  }
}

export class CustomError extends Error {
  public name: string;
  public code: string;
  public message: string;
  public httpCode: number;
  public data: any;

  constructor(error: any) {
    super();
    this.name = "Error";
    this.code = error.code;
    this.message = error.message;
    this.httpCode = error.httpCode;
    this.data = error.data;
  }
}

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info("---in error handler---");
  if (err instanceof UserError) {
    logger.error(`UserError: ${err.message}`);
    return res.status(400).json({ error: err.message });
  } else if (err instanceof CustomError) {
    logger.error(`CustomError: ${err.message}`);
    return res.status(err.httpCode).json({ error: err.message });
  } else if (err instanceof ValidateError) {
    logger.error(`ValidateError: ${err.message}`);
    return res.status(422).json({ error: err.message });
  } else {
    logger.error(`Error: ${err.message}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default errorHandler;
