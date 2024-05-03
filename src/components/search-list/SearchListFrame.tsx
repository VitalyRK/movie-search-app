import { Grid } from "@mantine/core";
import MovieCard from "../watched-list/MovieCard";
import SearchBar from "./SearchBar";
import FilterPanel from "./FilterPanel";
import { useUserForm, UserFormProvider } from "./context/FormContext";

const SearchListFrame = () => {
  const searchForm = useUserForm({
    initialValues: {
      searchField: "",
      genres: [],
    },
    validateInputOnBlur: true,
    validate: {
      searchField: (value) =>
        value.trim().length < 2 ? "Value is too short" : null,
    },
  });

  return (
    <UserFormProvider form={searchForm}>
      <form
        onSubmit={searchForm.onSubmit((data) => {
          console.log(data);
        })}
      >
        <SearchBar />
        <FilterPanel />
      </form>
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
    </UserFormProvider>
  );
};

export default SearchListFrame;
