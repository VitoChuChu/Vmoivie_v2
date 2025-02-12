import axios from "axios";

const env = process.env.NODE_ENV;
let location = "";
switch (env) {
  case "development":
    location = "http://localhost:8080";
    break;
  case "production":
    location = "xxxxx";
    break;
  default:
    throw new Error("Can not get NODE_ENV");
}

const TMDB_BASE_URL = `${location}/fetchTMDB`;
const DB_BASE_URL = `${location}`;

export const fetchData = async (
  url,
  method = "get",
  data = {},
  source = "TMDB",
  header = {
    "Content-Type": "application/json",
  }
) => {
  try {
    const BASE_URL = source === "TMDB" ? TMDB_BASE_URL : DB_BASE_URL;
    const response = await axios({
      url: `${BASE_URL}/${url}`,
      method,
      header: header,
      data: data,
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw new Error("Failed to fetch data");
  }
};
