import axios from "axios";
import { FetchDataConfig } from "../interface/fetchData";

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

export const fetchData = async ({
  url,
  method = "get",
  data = {},
  source = "TMDB",
  headers = {
    "Content-Type": "application/json",
  } as { [key: string]: string },
}: FetchDataConfig): Promise<any> => {
  try {
    const BASE_URL = source === "TMDB" ? TMDB_BASE_URL : DB_BASE_URL;
    const response = await axios({
      url: `${BASE_URL}/${url}`,
      method,
      headers,
      data,
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw new Error("Failed to fetch data");
  }
};
