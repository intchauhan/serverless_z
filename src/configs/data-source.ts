import "reflect-metadata";
import { DataSource } from "typeorm";
import { Leads } from "../entity/Leads";
import { Interests } from "../entity/Interests";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [Leads, Interests],
  subscribers: [],
  migrations: [],
});
