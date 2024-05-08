import { Card, Image, Text, Group, Flex, Stack, Title } from "@mantine/core";
import Star from "../star/Star";
import { IMAGES_BASE_URL, genresList } from "../../../helpers/constants";
import { IMovieData } from "../../../helpers/types";
import { useNavigate } from "react-router-dom";
import { formatVotes } from "../../../helpers/helper-functions";

interface IMovieCardProps {
  movie_data: IMovieData;
}

const MovieCard = ({
  movie_data: {
    id,
    original_title,
    poster_path,
    release_date,
    vote_average,
    vote_count,
    genre_ids,
  },
}: IMovieCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      shadow="sm"
      m={"auto"}
      padding="24px"
      radius="12px"
      h={218}
      w={"482px"}
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`./detail/${id}`)}
    >
      <Flex gap={16} h={"100%"}>
        <Image
          src={
            poster_path
              ? IMAGES_BASE_URL + "w154/" + poster_path
              : "./no-poster.png"
          }
          height={"100%"}
          w={119}
          alt="Poster"
        />
        <Stack style={{ flexGrow: "1" }} justify="space-between">
          <Flex justify="space-between">
            <Stack justify="space-between">
              <Stack gap={8} w={240} justify="space-between">
                <Title order={3} fw={500} c={"customColors.3"}>
                  {original_title}
                </Title>
                <Text c={"customColors.6"}>{release_date}</Text>
                <Flex gap={8} h={28} align="center">
                  <Star rate={Number(vote_average)} color="overall" />
                  <Text lh={"50px"} c={"customColors.6"}>
                    ({formatVotes(vote_count)})
                  </Text>
                </Flex>
              </Stack>
            </Stack>
            <Star rate={8} color="user" />
          </Flex>
          <Group gap={8} wrap="nowrap">
            <Text c={"customColors.6"}>Genres</Text>
            <Text>
              {genresList
                .reduce<string[]>((acc, genre) => {
                  if (genre_ids.includes(Number(genre.value)))
                    acc.push(genre.label);
                  return acc;
                }, [])
                .join(", ")}
            </Text>
          </Group>
        </Stack>
      </Flex>
    </Card>
  );
};

export default MovieCard;
