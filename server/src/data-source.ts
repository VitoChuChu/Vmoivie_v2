import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./models/User";
import { Wishlist } from "./models/Wishlist";

console.log(process.env.DB_PORT);
console.log(process.env.DB_USERNAME);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_NAME);
console.log(process.env.DB_HOST);

export const AppDataSource = new DataSource({
  type: "postgres",
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  synchronize: true,
  logging: false,
  entities: [User, Wishlist],
  migrations: [],
  subscribers: [],
  ssl: true,
});
