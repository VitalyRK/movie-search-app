import { Grid, Pagination } from "@mantine/core";
import MovieCard from "../ui/movie-card/MovieCard";
import SearchPanel from "./control/SearchPanel";
import FilterPanel from "./control/FilterPanel";
import SortPanel from "./control/SortPanel";
import { useEffect, useState } from "react";
import { getMovies } from "../../api/getData";
import {
  IGetMoviesProps,
  IMovieResults,
  ISearchFormValues,
} from "../../helpers/types";
import { SearchFormProvider, useSearchForm } from "./context/FormContext";
import LoaderCenter from "../ui/loader/LoaderCenter";
import { useMediaQuery } from "@mantine/hooks";
import NothingFound from "../ui/nothing-found/NothingFound";

const SearchListFrame = () => {
  const searchForm = useSearchForm({
    initialValues: {
      searchField: "",
      genres: [],
      releaseYear: null,
      voteAverageGte: "",
      voteAverageLte: "",
      sortBy: "popularity.desc",
      page: null,
    },
    validateInputOnChange: true,

    validate: {
      genres: (value) =>
        value.length > 3 ? "You can select maximum three" : null,
      voteAverageGte: (value) =>
        Number(value) < 0
          ? "Must be greater than or equal to 0"
          : Number(value) > 10
          ? "Must be less than or equal to 10"
          : null,
      voteAverageLte: (value) =>
        Number(value) < 0
          ? "Must be greater than or equal to 0"
          : Number(value) > 10
          ? "Must be less than or equal to 10"
          : null,
    },
  });
  const isMobile = useMediaQuery("(max-width: 800px)");

  const [dataMovies, setDataMovies] = useState<IMovieResults | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const sortBy = searchForm.getValues().sortBy;
  const page = searchForm.getValues().page;

  const refreshData = async (searchFormData: ISearchFormValues) => {
    setIsLoading(true);
    setDataMovies(null);

    const value: IGetMoviesProps = {
      ...searchFormData,
      searchField: searchFormData.searchField
        ? searchFormData.searchField.trim()
        : "",
      release: searchFormData.releaseYear
        ? searchFormData.releaseYear.getFullYear()
        : null,
    };
    const data = await getMovies(value);
    setDataMovies(data);
    setIsLoading(false);
  };

  useEffect(() => {
    (async () => {
      try {
        await refreshData(searchForm.getValues());
      } catch {
        throw new Error("Error");
      }
    })();
  }, [sortBy, page]);

  return (
    <SearchFormProvider form={searchForm}>
      <form
        style={{ width: "100%" }}
        onSubmit={searchForm.onSubmit((data) => {
          refreshData(data);
        })}
      >
        <SearchPanel />
        <FilterPanel onReset={refreshData} />
        <SortPanel />
      </form>
      {isLoading ? (
        <LoaderCenter />
      ) : (
        <>
          <Grid style={{ gridTemplateRows: "1fr" }} gutter={{ base: "16px" }}>
            {dataMovies &&
              dataMovies.results.map((movie, id) => {
                return (
                  <Grid.Col key={`card-${id}`} span={{ base: 12, xl: 6 }}>
                    <MovieCard movie_data={movie} />
                  </Grid.Col>
                );
              }, [])}
            {dataMovies?.results.length === 0 && <NothingFound />}
          </Grid>
          {dataMovies && dataMovies.total_pages > 1 && (
            <Pagination
              style={{ alignSelf: isMobile ? "center" : "end" }}
              size={isMobile ? "xs" : "sm"}
              total={dataMovies.total_pages}
              value={page || 1}
              onChange={(page) => {
                searchForm.setValues((prev) => ({
                  ...prev,
                  page,
                }));
              }}
            />
          )}
        </>
      )}
    </SearchFormProvider>
  );
};

export default SearchListFrame;
