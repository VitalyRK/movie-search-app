import { Box, Button, Flex, Group, MultiSelect, Select } from "@mantine/core";
import { LIMIT_OF_RATES, genresList } from "../../../helpers/constants";
import { YearPickerInput } from "@mantine/dates";
import ArrowDownIcon from "../../ui/arrow-down-icon/ArrowDownIcon";
import { useSearchFormContext } from "../context/FormContext";

function FilterPanel() {
  const form = useSearchFormContext();
  const disabledFiltersButton =
    form.getValues().genres.length === 0 &&
    form.getValues().releaseYear === null &&
    form.getValues().voteAverageGte === null &&
    form.getValues().voteAverageLte === null;

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
        placeholder="Select genre"
        data={genresList}
        clearable
        hidePickedOptions
        rightSection={<ArrowDownIcon />}
        maxValues={4}
        className="interactive__input"
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
        maxDate={new Date(2025, 1)}
        placeholder="Select release year"
        rightSection={<ArrowDownIcon />}
        clearable
      />
      <Group gap={8} style={{ alignSelf: "start" }}>
        <Select
          {...form.getInputProps("voteAverageGte")}
          w={137}
          label="Ratings"
          labelProps={{
            style: {
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "140%",
              marginBottom: "8px",
            },
          }}
          placeholder="From"
          data={
            form.getValues().voteAverageLte
              ? Array.from(
                  { length: Number(form.getValues().voteAverageLte) - 1 },
                  (_, i) => (i + 1).toString()
                )
              : Array.from({ length: LIMIT_OF_RATES }, (_, i) => i.toString())
          }
          clearable
        />
        <Select
          {...form.getInputProps("voteAverageLte")}
          w={137}
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
          placeholder="To"
          data={
            form.getValues().voteAverageGte
              ? Array.from(
                  {
                    length:
                      LIMIT_OF_RATES - Number(form.getValues().voteAverageGte),
                  },
                  (_, i) =>
                    (i + Number(form.getValues().voteAverageGte) + 1).toString()
                )
              : Array.from({ length: LIMIT_OF_RATES }, (_, i) =>
                  (i + 1).toString()
                )
          }
          clearable
        />
      </Group>

      <Box h={67} style={{ display: "flex", alignItems: "end" }}>
        <Button
          style={{ fontWeight: 500 }}
          p={0}
          className={disabledFiltersButton ? "" : "interactive__button"}
          variant="transparent"
          disabled={disabledFiltersButton}
          onClick={() =>
            form.setValues((prev) => ({
              ...prev,
              genres: [],
              releaseYear: null,
              voteAverageGte: null,
              voteAverageLte: null,
            }))
          }
        >
          Reset filters &#10006;
        </Button>
      </Box>
    </Flex>
  );
}

export default FilterPanel;
