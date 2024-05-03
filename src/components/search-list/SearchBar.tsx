import { Button, Image, Group, TextInput, Title } from "@mantine/core";
import { useUserFormContext } from "./context/FormContext";

function SearchBar() {
  const searchField = useUserFormContext();

  return (
    <Group w={"100%"} justify="space-between" align="center">
      <Title order={1}>Movies</Title>
      <TextInput
        {...searchField.getInputProps("searchField")}
        styles={{
          error: { display: "none" },
        }}
        w={490}
        size="lg"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column-reverse",
          gap: "5px",
          alignItems: "center",
        }}
        leftSection={
          <Image
            src={"./Search.svg"}
            style={{
              height: "18px",
              width: "18px",
            }}
          />
        }
        rightSection={
          <Button
            h={32}
            w={88}
            p={"6px 20px"}
            style={{
              position: "absolute",
              right: "12px",
              borderRadius: "8px",
              fontSize: "14px",
              lineHeight: "140%",
            }}
            type="submit"
          >
            Search
          </Button>
        }
        placeholder="Search movie title"
      />
    </Group>
  );
}

export default SearchBar;
