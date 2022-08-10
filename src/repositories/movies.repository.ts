import { AppDataSource } from "../db/connection";
import { Movie } from "../entities/movies.entity";

export const moviesRepository = AppDataSource.getRepository(Movie);
