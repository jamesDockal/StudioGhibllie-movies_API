### How to run

To install dependecies: `yarn install`.

To start the API you can run `yarn start:dev` to start in dev mode or `yarn start:containers` to start the containers

## ROUTES

-- **POST** `/movies/save-movies` = Call Studio Ghibli api and save 50 movies <br />
-- **GET** `/movies?page={number}` = Return 10 movies with pagination<br />
-- **GET** `/movies/:id` = Return movie by the id
