import { IGetMoviesProps, IMovieResults } from "../helpers/types";

export const getMovies = async ({
  searchField,
  genres,
  release,
  voteAverageGte,
  voteAverageLte,
  sortBy,
  page,
}: IGetMoviesProps): Promise<IMovieResults> => {
  const textQuery = `/${searchField}` ?? "";
  const textGenres = genres && genres?.length >= 1 ? genres.join("%2C") : "";
  const textYear = `/${release}` ?? "";
  const textVoteGte = `/${voteAverageGte}` ?? "";
  const textVoteLte = `/${voteAverageLte}` ?? "";

  const response = await fetch(
    `https://movie-search-app-sage-two.vercel.app/movies/${
      page ?? 1
    }/${sortBy}/`
  );

  const data = await response.json();
  return data;
};

export const getMovieById = async (id: number) => {
  const response = await fetch(
    `https://movie-search-app-sage-two.vercel.app/details/${id}/`
  );
  const data = await response.json();
  return data;
};
