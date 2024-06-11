import { BASE_URL } from "../helpers/constants";
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
  const response = await fetch(`${BASE_URL}movies/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      searchField,
      genres,
      release,
      voteAverageGte,
      voteAverageLte,
      sortBy,
      page,
    }),
  });

  const data = await response.json();
  return data;
};

export const getMovieById = async (id: number) => {
  const response = await fetch(`${BASE_URL}details/${id}/`);
  const data = await response.json();
  return data;
};
