import { Image, Stack, Title } from "@mantine/core";

function NothingFound() {
  return (
    <Stack w={{ base: 300, sx: 468 }} h={293} align="center" mb={50}>
      <Image w={310} h={252} src={"./nothing-found.png"} />
      <Title ta={"center"} order={3}>
        We don't have such movies, look for another one
      </Title>
    </Stack>
  );
}

export default NothingFound;
