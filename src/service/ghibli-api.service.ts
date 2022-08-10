import axios from "axios";

export const ghibliApi = axios.create({
  baseURL: "https://ghibliapi.herokuapp.com",
});
