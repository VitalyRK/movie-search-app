import { Image, TextInput } from "@mantine/core";
import PrimaryButton from "../../ui/button/PrimaryButton";
import { useSearchFormContext } from "../context/FormContext";
import SearchBarWrapper from "../../ui/search-bar/SearchBarWrapper";
import { useMediaQuery } from "@mantine/hooks";

function SearchPanel() {
  const searchField = useSearchFormContext();
  const isMobile = useMediaQuery(`(max-width: 560px)`);

  return (
    <SearchBarWrapper title="Movies">
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
        placeholder={isMobile ? "Search" : "Search movie title"}
        className="interactive__input"
      />
    </SearchBarWrapper>
  );
}

export default SearchPanel;
