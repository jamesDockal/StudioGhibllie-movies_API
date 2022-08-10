import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";

const dataOptions: DataSourceOptions = {
  type: "sqlite",
  database: "database.sqlite",
  synchronize: false,
  logging: false,
  subscribers: [],
  entities: [`${__dirname}/../entities/*.entity.{ts,js}`],
  migrations: [`${__dirname}/../migrations/*.{ts,js}`],
};

export const AppDataSource = new DataSource(dataOptions);
