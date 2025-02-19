export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  release_date: string;
  movieID: number;
}

export interface MovieDetail extends Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  runtime: number;
  release_date: string;
  homepage: string;
  genres: { name: string }[];
  releaseDate: string; // From DB
  posterPath: string; // From DB
}

export interface Genre {
  id: number;
  name: string;
}

export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

export interface WishlistConfig {
  movieID: number;
  title: string;
  release_date: string;
  poster_path: string;
}
