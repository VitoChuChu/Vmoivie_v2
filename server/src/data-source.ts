import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./models/User";
import { Wishlist } from "./models/Wishlist";

export const AppDataSource = new DataSource({
  type: "postgres",
  port: 5001,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  synchronize: true,
  logging: false,
  entities: [User, Wishlist],
  migrations: [],
  subscribers: [],
});
