import { Router } from "express";

import { MoviesController } from "../controllers/movies.controller";

const moviesRoutes = Router();

const { saveMovies } = new MoviesController();

moviesRoutes.post("/save-movies", saveMovies);

export { moviesRoutes };
