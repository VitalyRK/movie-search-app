import {
  Card,
  Image,
  Text,
  Badge,
  Group,
  Flex,
  Stack,
  Title,
} from "@mantine/core";
import Star from "./Star";

interface MovieCardProps {
  name: string;
}

const MovieCard = ({ name }: MovieCardProps) => {
  return (
    <Card
      shadow="sm"
      m={"auto"}
      padding="24px"
      radius="12px"
      h={218}
      miw={"482px"}
      w={"fit-content"}
    >
      <Flex gap={16} h={"100%"}>
        <Image
          src="https://ir.ozone.ru/s3/multimedia-x/c1000/6386271753.jpg"
          height={"100%"}
          w={119}
          alt="Poster"
        />
        <Stack style={{ flexGrow: "1" }} justify="space-between">
          <Flex justify="space-between">
            <Stack justify="space-between">
              <Stack gap={8} justify="space-between">
                <Title order={3} fw={500} c={"customColors.3"}>
                  {name}
                </Title>
                <Text c={"customColors.6"}>1999</Text>
                <Flex gap={8} h={28} align="center">
                  <Star rate={8.5} color="overall" />
                  <Text lh={"50px"} c={"customColors.6"}>
                    (2.9M)
                  </Text>
                </Flex>
              </Stack>
            </Stack>
            <Star rate={8} color="user" />
          </Flex>
          <Group gap={8} wrap="nowrap">
            <Text c={"customColors.6"}>Genres</Text>
            <Text style={{ whiteSpace: "nowrap" }}>Drama, Comedy, Romance</Text>
          </Group>
        </Stack>
      </Flex>
    </Card>
  );
};

export default MovieCard;
