import { Router } from "express";

import { MoviesController } from "../controllers/movies.controller";

const moviesRoutes = Router();

const { saveMovies, getMovies, getMovie } = new MoviesController();

moviesRoutes.post("/save-movies", saveMovies);

moviesRoutes.get("/", getMovies);
moviesRoutes.get("/:id", getMovie);

export { moviesRoutes };
