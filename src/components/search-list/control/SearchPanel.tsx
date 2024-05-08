import { Image, TextInput } from "@mantine/core";
import PrimaryButton from "../../ui/button/PrimaryButton";
import SearchBar from "../../ui/search-bar/SearchBarWrapper";
import { useSearchFormContext } from "../context/FormContext";

function SearchPanel() {
  const searchField = useSearchFormContext();

  return (
    <SearchBar title="Movies">
      <TextInput
        {...searchField.getInputProps("searchField")}
        styles={{
          error: { position: "absolute", top: -20, left: 5 },
        }}
        w={{ base: 300, sm: 400, lg: 490 }}
        h={55}
        size="lg"
        style={{
          position: "relative",
        }}
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
        rightSection={<PrimaryButton title="Search" small submit />}
        placeholder="Search movie title"
        className="interactive__input"
      />
    </SearchBar>
  );
}

export default SearchPanel;
