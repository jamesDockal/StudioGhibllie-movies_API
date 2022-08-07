import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 8081;

app.listen(port, async () => {
  console.log(`Server running on port: ${port}`);
});
