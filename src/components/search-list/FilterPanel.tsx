import { Button, Flex, Group, MultiSelect, Select } from "@mantine/core";
import { genresList } from "../../helpers/constants";
import { useEffect, useState } from "react";
import { YearPickerInput } from "@mantine/dates";
import { useUserFormContext } from "./context/FormContext";

function FilterPanel() {
  const form = useUserFormContext();

  const [genreId, setGenreId] = useState<string[]>([]);
  const [releaseYear, setReleaseYear] = useState<Date | null>(null);
  const [voteAverageGte, setVoteAverageGte] = useState<string | null>(null);
  const [voteAverageLte, setVoteAverageLte] = useState<string | null>(null);

  useEffect(() => {
    console.log(
      genreId,
      releaseYear?.getFullYear(),
      voteAverageGte,
      voteAverageLte
    );
    console.log();
  }, [genreId, releaseYear, voteAverageGte, voteAverageLte]);

  return (
    <Flex justify={"space-between"} gap={16}>
      <MultiSelect
        {...form.getInputProps("genres")}
        style={{ flex: "1 1 auto" }}
        label="Genres"
        labelProps={{
          style: {
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "140%",
            marginBottom: "8px",
          },
        }}
        placeholder="Select genre"
        data={genresList}
        value={genreId}
        onChange={setGenreId}
        clearable
        searchable
      />

      <YearPickerInput
        style={{ flex: "1 1 auto" }}
        label="Release year"
        labelProps={{
          style: {
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "140%",
            marginBottom: "8px",
          },
        }}
        placeholder="Select release year"
        value={releaseYear}
        onChange={setReleaseYear}
        clearable
      />
      <Group gap={8}>
        <Select
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
          value={voteAverageGte}
          onChange={setVoteAverageGte}
          data={
            voteAverageLte
              ? Array.from({ length: Number(voteAverageLte) - 1 }, (_, i) =>
                  (i + 1).toString()
                )
              : Array.from({ length: 10 }, (_, i) => i.toString())
          }
          clearable
        />
        <Select
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
          value={voteAverageLte}
          onChange={setVoteAverageLte}
          data={
            voteAverageGte
              ? Array.from({ length: 10 - Number(voteAverageGte) }, (_, i) =>
                  (i + Number(voteAverageGte) + 1).toString()
                )
              : Array.from({ length: 10 }, (_, i) => (i + 1).toString())
          }
          clearable
        />
      </Group>

      <Button
        style={{ alignSelf: "end", fontWeight: 500 }}
        p={0}
        c={"customColors.6"}
        variant="transparent"
        onClick={() => form.reset()}
      >
        Reset filters
      </Button>
    </Flex>
  );
}

export default FilterPanel;
