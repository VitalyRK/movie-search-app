import {
  Box,
  Button,
  Flex,
  Group,
  MultiSelect,
  NumberInput,
  Image,
} from "@mantine/core";
import { genresList } from "../../../helpers/constants";
import { YearPickerInput } from "@mantine/dates";
import ArrowDownIcon from "../../ui/arrow-down-icon/ArrowDownIcon";
import { useSearchFormContext } from "../context/FormContext";
import classes from "./index.module.css";
import { ISearchFormValues } from "../../../helpers/types";
import { useState } from "react";
import ArrowUpIcon from "../../ui/arrow-up-icon/ArrowUpIcon";

interface FilterPanelProps {
  onReset: (searchFormData: ISearchFormValues) => Promise<void>;
}

function FilterPanel({ onReset }: FilterPanelProps) {
  const form = useSearchFormContext();
  const [isOpenGenresPicker, setIsOpenGenresPicker] = useState(false);
  const [isOpenYearPicker, _] = useState(false);
  const disabledFiltersButton =
    form.getValues().genres.length === 0 &&
    form.getValues().releaseYear === null &&
    form.getValues().voteAverageGte === "" &&
    form.getValues().voteAverageLte === "";

  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      justify={"space-between"}
      gap={16}
      mt={40}
      mb={24}
    >
      <MultiSelect
        {...form.getInputProps("genres")}
        label="Genres"
        h={36}
        style={{ position: "relative", flex: "1", maxWidth: "300px" }}
        labelProps={{
          style: {
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "140%",
            marginBottom: "8px",
          },
        }}
        styles={{
          error: { position: "absolute", top: 6, right: 0 },
        }}
        placeholder={form.getValues().genres.length > 0 ? "" : "Select genre"}
        data={genresList}
        withCheckIcon={false}
        onDropdownOpen={() => setIsOpenGenresPicker(!isOpenGenresPicker)}
        onDropdownClose={() => setIsOpenGenresPicker(!isOpenGenresPicker)}
        rightSection={!isOpenGenresPicker ? <ArrowDownIcon /> : <ArrowUpIcon />}
        maxValues={4}
        className={"interactive__input"}
      />

      <YearPickerInput
        {...form.getInputProps("releaseYear")}
        maw={300}
        style={{ flex: "1" }}
        label="Release year"
        labelProps={{
          style: {
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "140%",
            marginBottom: "8px",
          },
        }}
        minDate={new Date(1925, 1)}
        maxDate={new Date(2030, 1)}
        allowDeselect
        placeholder="Select release year"
        rightSection={!isOpenYearPicker ? <ArrowDownIcon /> : <ArrowUpIcon />}
        clearable
        classNames={{ input: classes.input }}
      />
      <Group gap={8} h={72} style={{ alignSelf: "start" }}>
        <NumberInput
          {...form.getInputProps("voteAverageGte")}
          label="Ratings"
          labelProps={{
            style: {
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "140%",
              marginBottom: "8px",
            },
          }}
          rightSection={<Image src={"./dropdown.svg"} />}
          w={137}
          h={72}
          placeholder="From"
          decimalScale={1}
          className={"interactive__input"}
        />
        <NumberInput
          {...form.getInputProps("voteAverageLte")}
          label="Ratings"
          labelProps={{
            style: {
              color: "transparent",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "140%",
              marginBottom: "8px",
            },
          }}
          rightSection={<Image src={"./dropdown.svg"} />}
          w={137}
          h={72}
          placeholder="To"
          decimalScale={1}
          className={"interactive__input"}
        />
      </Group>

      <Box h={67} style={{ display: "flex", alignItems: "end" }}>
        <Button
          style={{ fontWeight: 500, backgroundColor: "transparent" }}
          p={0}
          className={disabledFiltersButton ? "" : "interactive__button"}
          variant="transparent"
          disabled={disabledFiltersButton}
          onClick={() => {
            form.setValues((prev) => ({
              ...prev,
              genres: [],
              releaseYear: null,
              voteAverageGte: "",
              voteAverageLte: "",
            }));
            onReset(form.getValues());
          }}
        >
          Reset filters &#10006;
        </Button>
      </Box>
    </Flex>
  );
}

export default FilterPanel;
