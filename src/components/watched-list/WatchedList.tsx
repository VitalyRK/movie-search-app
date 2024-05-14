import { Grid, TextInput, Image, Pagination } from "@mantine/core";
import MovieCard from "../ui/movie-card/MovieCard";
import { useRatedMovies } from "../../context/RatedContext";
import LoaderCenter from "../ui/loader/LoaderCenter";
import PrimaryButton from "../ui/button/PrimaryButton";
import SearchBarWrapper from "../ui/search-bar/SearchBarWrapper";
import { useState } from "react";
import { MovieToLocal } from "../../helpers/types";
import NothingFound from "../ui/nothing-found/NothingFound";
import { useMediaQuery } from "@mantine/hooks";

const WatchedList = () => {
  const isMobile = useMediaQuery(`(max-width: 560px)`);
  const { ratedMovies, isLoading, searchByTitle } = useRatedMovies();
  const [query, setQuery] = useState("");
  const [activePage, setPage] = useState(1);
  const [searchMovies, setSearchMovies] = useState<MovieToLocal[] | null>(null);

  const numberForPagination = (activePage - 1) * 4;

  const handleClick = (query: string) => {
    setPage(1);
    const result = searchByTitle(query);
    setSearchMovies(result);
  };

  return (
    <>
      <SearchBarWrapper title="Watched movies">
        <TextInput
          styles={{
            error: { position: "absolute", top: -20, left: 5 },
          }}
          w={{ base: 300, sm: 400, lg: 490 }}
          h={55}
          size="lg"
          style={{
            position: "relative",
          }}
          value={query}
          onChange={(event) => setQuery(event.currentTarget.value)}
          leftSection={
            <Image
              src={"./Search.svg"}
              style={{
                height: "18px",
                width: "18px",
              }}
              alt="search icon"
            />
          }
          rightSection={
            <PrimaryButton
              title="Search"
              small
              onClick={handleClick}
              query={query}
            />
          }
          placeholder={isMobile ? "Search" : "Search movie title"}
          className="interactive__input"
        />
      </SearchBarWrapper>

      <Grid style={{ gridTemplateRows: "1fr" }} gutter={{ base: "16px" }}>
        {isLoading ? (
          <LoaderCenter />
        ) : (
          ratedMovies &&
          searchMovies === null &&
          ratedMovies.map((movie, id) => {
            if (id >= numberForPagination && id < numberForPagination + 4)
              return (
                <Grid.Col key={`card-${id}`} span={{ base: 12, xl: 6 }}>
                  <MovieCard movie_data={movie.data} />
                </Grid.Col>
              );
          }, [])
        )}
        {searchMovies && searchMovies.length === 0 && <NothingFound />}
        {searchMovies &&
          searchMovies.map((movie, id) => {
            if (id >= numberForPagination && id < numberForPagination + 4)
              return (
                <Grid.Col key={`card-${id}`} span={{ base: 12, xl: 6 }}>
                  <MovieCard movie_data={movie.data} />
                </Grid.Col>
              );
          }, [])}
      </Grid>
      {ratedMovies && searchMovies === null && (
        <Pagination
          total={Math.ceil(ratedMovies.length / 4)}
          value={activePage}
          onChange={setPage}
          size={isMobile ? "xs" : "sm"}
        />
      )}
      {searchMovies && (
        <Pagination
          total={Math.ceil(searchMovies.length / 4)}
          value={activePage}
          onChange={setPage}
          size={isMobile ? "xs" : "sm"}
        />
      )}
    </>
  );
};

export default WatchedList;
