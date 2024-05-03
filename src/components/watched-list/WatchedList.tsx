import { Grid, Title } from "@mantine/core";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import { BASE_URL, FIXED_PARAMS } from "../../helpers/constants";

interface WatchedListProps {
  name?: string;
}

const WatchedList = ({ name }: WatchedListProps) => {
  useEffect(() => {
    const url =
      BASE_URL +
      FIXED_PARAMS +
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
      .then((json) => console.log(json))
      .catch((err) => console.error("error:" + err));
  }, []);
  return (
    <>
      <Title order={1}>Watched movies</Title>
      <Grid gutter={{ base: "16px" }}>
        <Grid.Col span={{ base: 12, xl: 6 }}>
          <MovieCard name={"The Green Mile"} />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xl: 6 }}>
          <MovieCard name={"test"} />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xl: 6 }}>
          <MovieCard name={"test"} />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xl: 6 }}>
          <MovieCard name={"test"} />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default WatchedList;
