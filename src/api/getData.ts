import { BASE_URL, FIXED_PARAMS_URL } from "../helpers/constants";
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

  const url =
    BASE_URL +
    FIXED_PARAMS_URL +
    `&page=${page ?? 1
    }${textYear}&sort_by=${sortBy}${textQuery}${textVoteGte}${textVoteLte}${textGenres}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjRmMDAwYTA1YWEyMWIxOTE2ZjMwNmQ2NzRkZWZiMCIsInN1YiI6IjY2MzMyNzJjNjYxMWI0MDEyNzY2NTBjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H4dI5dJnhW5l5NgMtRzFysyXRKA9Aj5Aefn773isp3U",
    },
  });

  const data = await response.json();
  return data;
};

export const getMovieById = async (id: number) => {
  const response = await fetch(
    `${BASE_URL}movie/${id}?append_to_response=videos&language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjRmMDAwYTA1YWEyMWIxOTE2ZjMwNmQ2NzRkZWZiMCIsInN1YiI6IjY2MzMyNzJjNjYxMWI0MDEyNzY2NTBjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H4dI5dJnhW5l5NgMtRzFysyXRKA9Aj5Aefn773isp3U",
      },
    }
  );
  const data = await response.json();
  return data;
};