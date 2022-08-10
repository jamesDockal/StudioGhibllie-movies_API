import app from "./app";
import dotenv from "dotenv";
import { AppDataSource } from "./db/connection";
dotenv.config();

const port = process.env.PORT || 8081;

AppDataSource.initialize().then(() => {
  app.listen(port, async () => {
    console.log(`Server running on port: ${port}`);
  });
});
