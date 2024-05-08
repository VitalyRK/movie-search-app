import { Grid, Title } from "@mantine/core";
import MovieCard from "../ui/movie-card/MovieCard";
import { useEffect, useState } from "react";
import { BASE_URL, FIXED_PARAMS_URL } from "../../helpers/constants";
import { IMovieResults } from "../../helpers/types";

interface WatchedListProps {
  name?: string;
}

const WatchedList = ({}: WatchedListProps) => {
  const [data, setData] = useState<IMovieResults | null>(null);

  useEffect(() => {
    const url =
      BASE_URL +
      FIXED_PARAMS_URL +
      `&page=1&sort_by=popularity.desc&with_genres=35&with_text_query=batman`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjRmMDAwYTA1YWEyMWIxOTE2ZjMwNmQ2NzRkZWZiMCIsInN1YiI6IjY2MzMyNzJjNjYxMWI0MDEyNzY2NTBjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H4dI5dJnhW5l5NgMtRzFysyXRKA9Aj5Aefn773isp3U",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .then(() => {})
      .catch((err) => console.error("error:" + err));
  }, []);

  console.log(data);

  return (
    <>
      <Title order={1}>Watched movies</Title>

      <Grid gutter={{ base: "16px" }}>
        {data && (
          <Grid.Col span={{ base: 12, xl: 6 }}>
            <MovieCard movie_data={data.results[0]} />
          </Grid.Col>
        )}
        {/* <Grid.Col span={{ base: 12, xl: 6 }}>
          <MovieCard name={"test"} />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xl: 6 }}>
          <MovieCard name={"test"} />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xl: 6 }}>
          <MovieCard name={"test"} />
        </Grid.Col> */}
      </Grid>
    </>
  );
};

export default WatchedList;
