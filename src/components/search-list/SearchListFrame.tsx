import { Grid, Image } from "@mantine/core";
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

const SearchListFrame = () => {
  const searchForm = useSearchForm({
    initialValues: {
      searchField: "",
      genres: [],
      releaseYear: null,
      voteAverageGte: null,
      voteAverageLte: null,
      sortBy: "popularity.desc",
      page: null,
    },
    validateInputOnChange: true,

    validate: {
      genres: (value) =>
        value.length > 3 ? "You can select maximum three" : null,
    },
  });
  const [dataMovies, setDataMovies] = useState<IMovieResults | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const sortBy = searchForm.getValues().sortBy;

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
  }, [sortBy]);

  return (
    <SearchFormProvider form={searchForm}>
      <form
        onSubmit={searchForm.onSubmit((data) => {
          refreshData(data);
        })}
      >
        <SearchPanel />
        <FilterPanel />
        <SortPanel />
      </form>
      {isLoading ? (
        <LoaderCenter />
      ) : (
        <Grid gutter={{ base: "16px" }}>
          {dataMovies &&
            dataMovies.results.map((movie, id) => {
              return (
                <Grid.Col key={`card-${id}`} span={{ base: 12, xl: 6 }}>
                  <MovieCard movie_data={movie} />
                </Grid.Col>
              );
            }, [])}
          {dataMovies?.results.length === 0 && (
            <Image src={"./nothing-found.png"} />
          )}
        </Grid>
      )}
    </SearchFormProvider>
  );
};

export default SearchListFrame;
