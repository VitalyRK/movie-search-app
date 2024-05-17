import {
  Card,
  Image,
  Text,
  Group,
  Flex,
  Stack,
  Title,
  Box,
} from "@mantine/core";
import Star from "../star/Star";
import { genresList } from "../../../helpers/constants";
import { IMovieData, IMovieDetail, MovieToLocal } from "../../../helpers/types";
import { useNavigate } from "react-router-dom";
import { formatVotes, instanceOfMine } from "../../../helpers/helper-functions";
import { useDisclosure, useHover, useMediaQuery } from "@mantine/hooks";
import StyledModal from "../styled-modal/StyledModal";
import { useRatedMovies } from "../../../context/RatedContext";

interface IMovieCardProps {
  movie_data: IMovieData | IMovieDetail;
}

const MovieCard = ({
  movie_data,
  movie_data: {
    id,
    original_title,
    poster_path,
    release_date,
    vote_average,
    vote_count,
  },
}: IMovieCardProps) => {
  const navigate = useNavigate();
  const { hovered, ref } = useHover();
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 560px)");

  const { getRateOfMovie, saveRatedMovie, updateRatedMovie, deleteRatedMovie } =
    useRatedMovies();
  const rate = getRateOfMovie(id);

  const handleSaveToLocal = (value: number) => {
    const valueToLocal: MovieToLocal = {
      data: movie_data,
      rate: value,
    };
    if (rate !== null) updateRatedMovie(valueToLocal);
    else {
      saveRatedMovie(valueToLocal);
    }
    close();
  };

  const handleRemoveRate = () => {
    deleteRatedMovie(id);
    close();
  };

  return (
    <>
      <Card
        ref={ref}
        shadow={hovered ? "md" : ""}
        m={"auto"}
        radius="12px"
        mih={218}
        h={"100%"}
        w={{ base: 300, sm: 482 }}
        style={{
          padding: isMobile ? "15px" : "24px",
          transition: ".3s ease",
          cursor: "pointer",
          filter: hovered ? "brightness(0.98)" : "none",
          position: "relative",
        }}
        onClick={() => navigate(`../movies/${id}`)}
      >
        <Flex
          direction={{ base: "column", sm: "row" }}
          align={{ base: "center", sm: "unset" }}
          gap={16}
          h={"100%"}
        >
          <Image
            src={
              poster_path
                ? `https://movie-search-app-sage-two.vercel.app/img/sm/${poster_path}`
                : "./no-poster.png"
            }
            height={"100%"}
            w={119}
            alt="Poster"
          />
          <Stack style={{ flexGrow: "1" }} justify="space-between">
            <Flex justify="space-between">
              <Stack justify="space-between">
                <Stack
                  gap={8}
                  w={240}
                  justify="space-between"
                  align={isMobile ? "center" : "unset"}
                  ta={isMobile ? "center" : "unset"}
                >
                  <Title order={3} fw={500} c={"customColors.3"}>
                    {original_title}
                  </Title>
                  <Text c={"customColors.6"}>{release_date}</Text>
                  <Flex gap={8} h={28} align="center">
                    <Star
                      rate={
                        vote_average !== undefined
                          ? Number(vote_average.toFixed(1))
                          : 0
                      }
                      color="overall"
                    />
                    <Text lh={"50px"} c={"customColors.6"}>
                      ({formatVotes(vote_count)})
                    </Text>
                  </Flex>
                </Stack>
              </Stack>
              <Box
                style={{
                  position: isMobile ? "absolute" : "unset",
                  top: "15px",
                  right: "15px",
                }}
              >
                <Star
                  rate={rate}
                  color={rate ? "user" : "inactive"}
                  openModal={open}
                />
              </Box>
            </Flex>
            <Group gap={8} wrap="nowrap">
              <Text c={"customColors.6"}>Genres</Text>
              <Text>
                {instanceOfMine<IMovieDetail>(movie_data, "genres") &&
                  movie_data.genres
                    .reduce<string[]>((acc, genre) => {
                      acc.push(genre.name);
                      return acc;
                    }, [])
                    .join(", ")}
                {instanceOfMine<IMovieData>(movie_data, "genre_ids") &&
                  genresList
                    .reduce<string[]>((acc, genre) => {
                      if (movie_data.genre_ids.includes(Number(genre.value)))
                        acc.push(genre.label);
                      return acc;
                    }, [])
                    .join(", ")}
              </Text>
            </Group>
          </Stack>
        </Flex>
      </Card>
      <StyledModal
        rate={rate}
        handleSaveToLocal={handleSaveToLocal}
        handleRemoveRate={handleRemoveRate}
        original_title={original_title}
        opened={opened}
        close={close}
      />
    </>
  );
};

export default MovieCard;
