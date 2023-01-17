import { DataSource } from "typeorm";
import { env } from "../config/env";

export const dataSource = new DataSource({
  type: "postgres",
  host: env.databaseHost,
  port: Number(env.databasePort),
  database: env.database,
  username: env.databaseUser,
  password: env.databasePassword,
  synchronize: false,
  entities: [],
  migrations: [],
});
