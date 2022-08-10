import { Request, Response } from "express";
import { StudioGhibliMovie } from "../dto/movies.dto";
import { moviesRepository } from "../repositories/movies.repository";
import { ghibliApi } from "../service/ghibli-api.service";

export class MoviesController {
  async saveMovies(req: Request, res: Response) {
    const { data: movies } = await ghibliApi.get("/films", {
      params: {
        limit: 50,
      },
    });

    const savedMovies = await Promise.all(
      movies.map(
        async ({
          id,
          description,
          director,
          movie_banner,
          producer,
          title,
        }: StudioGhibliMovie) => {
          const isMovieAlredyRegistered = await moviesRepository.findOneBy({
            id,
          });

          if (isMovieAlredyRegistered) {
            return {
              id,
              description,
              director,
              movie_banner,
              producer,
              title,
            };
          }

          const movie = moviesRepository.create({
            id,
            title,
            banner: movie_banner,
            description,
            director,
            producer,
          });

          await moviesRepository.save(movie);

          return movie;
        }
      )
    );

    return res.json(savedMovies);
  }
}
