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
  const textQuery = searchField ? `&with_text_query=${searchField}` : "";
  const textGenres =
    genres && genres?.length >= 1 ? `&with_genres=${genres.join("%2C")}` : "";
  const textYear = release ? `&primary_release_year=${release}` : "";
  const textVoteGte = voteAverageGte
    ? `&vote_average.gte=${voteAverageGte}`
    : "";
  const textVoteLte = voteAverageLte
    ? `&vote_average.lte=${voteAverageLte}`
    : "";

  const response = await fetch(
    `https://movie-search-app-sage-two.vercel.app/movies/page=${
      page ?? 1
    }&${textYear}sort_by=${sortBy}${textQuery}${textVoteGte}${textVoteLte}${textGenres}/`
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
