import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./models/User";
import { Wishlist } from "./models/Wishlist";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5001,
  username: "postgres",
  password: "postgres",
  database: "vmovie_docker",
  synchronize: true,
  logging: false,
  entities: [User, Wishlist],
  migrations: [],
  subscribers: [],
});
