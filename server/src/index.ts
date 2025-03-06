import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();

import { AppDataSource } from "./data-source";
import { Express } from "express";
import { connectLogger } from "log4js";
import express from "express";
import cors from "cors";
import logger from "./utils/logger/logger";
import swaggerUi from "swagger-ui-express";

/* Config */
import { RegisterRoutes } from "./routes/routes";
import { uptimerobotWhiteList } from "./config/uptimerobotWhiteList";

/* Middleware */
import errorHandler from "./middleware/errorHandler";

const app: Express = express();
app.use(express.json());

let whitelist = ["http://localhost:3001", "https://vitochuchu.github.io/"];
whitelist = whitelist.concat(uptimerobotWhiteList);

const corsOptions = {
  // origin: (origin: any, callback: any) => {
  //   logger.info(origin);
  //   if (whitelist.indexOf(origin) !== -1 || !origin) {
  //     callback(null, true);
  //   } else {
  //     callback(new Error("Not allowed by CORS"));
  //   }
  // },
};

app.use(cors(corsOptions));

const initServer = async () => {
  logger.info("Server is starting...");

  // Set Log4js
  app.use(
    connectLogger(logger, {
      level: "auto",
      format: (req, res, format) =>
        format(
          `:remote-addr :method :status :response-time ms :url ${
            req.is("multipart/form-data")
              ? "form-data"
              : JSON.stringify(req.body)
          }`
        ),
      nolog: "/.(gif|jpe?g|png)$/",
    })
  );

  // Set Router
  const createRouter = (app: any) => {
    RegisterRoutes(app);
  };
  createRouter(app);

  // Set Swagger
  const swaggerSpec = require("./config/swagger.json");
  const createSwagger = (app: any) => {
    swaggerSpec.host = process.env.PROJECT_DOMAIN;
    swaggerSpec.schemes = ["https"];
    swaggerSpec.servers.push({
      url: `https://${process.env.PROJECT_DOMAIN}`,
    });
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  };
  if (process.env.NODE_ENV !== "production") {
    createSwagger(app);
  }

  app.use(errorHandler);

  AppDataSource.initialize()
    .then(async () => {
      app.listen("8080", () => {
        logger.info("Server is running on port 8080");
      });
    })
    .catch((error) => console.log(error));
};

initServer();
