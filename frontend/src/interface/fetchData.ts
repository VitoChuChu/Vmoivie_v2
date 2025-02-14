import { Method } from "axios";

export interface FetchDataConfig {
  url: string;
  method?: Method;
  data?: Record<string, any>;
  source?: "TMDB" | "DB";
  headers?: { [key: string]: string };
}
