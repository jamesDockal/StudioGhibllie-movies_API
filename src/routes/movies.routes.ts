import { Router } from "express";

import { MoviesController } from "../controllers/movies.controller";

const moviesRoutes = Router();

const { saveMovies, getMovies } = new MoviesController();

moviesRoutes.post("/save-movies", saveMovies);

moviesRoutes.get("/", getMovies);

export { moviesRoutes };
