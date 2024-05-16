import { Card, Flex, Stack, Title, Image, Text, Box } from "@mantine/core";
import moment from "moment";
import { IMAGES_BASE_URL } from "../../helpers/constants";
import { convertMinutesToHours } from "../../helpers/helper-functions";
import Star from "../ui/star/Star";
import InfoRow from "./InfoRow";
import { IMovieDetail, MovieToLocal } from "../../helpers/types";
import { useDisclosure } from "@mantine/hooks";
import StyledModal from "../ui/styled-modal/StyledModal";
import { useRatedMovies } from "../../context/RatedContext";

interface BasicDataCardProps {
  props: IMovieDetail;
}

const BasicDataCard = ({
  props,
  props: {
    id,
    poster_path,
    genres,
    original_title,
    release_date,
    vote_average,
    runtime,
    revenue,
    vote_count,
    budget,
  },
}: BasicDataCardProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { getRateOfMovie, saveRatedMovie, updateRatedMovie, deleteRatedMovie } =
    useRatedMovies();
  const rate = getRateOfMovie(id);

  const handleSaveToLocal = (value: number) => {
    const valueToLocal: MovieToLocal = {
      data: props,
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
        p={{ base: "14px", sm: "24px" }}
        radius="12px"
        h={{ base: "auto", lg: 400 }}
        w={{ base: "100%", sm: 540, lg: 800 }}
      >
        <Flex gap={16} h={"100%"} direction={{ base: "column", lg: "row" }}>
          <Image
            src={
              poster_path
                ? IMAGES_BASE_URL + "w342/" + poster_path
                : "../no-poster-lg.png"
            }
            height={"100%"}
            w={250}
            alt="Poster"
            style={{ alignSelf: "center" }}
          />
          <Stack style={{ flexGrow: "1" }} justify="space-between">
            <Flex gap={5} justify="space-between">
              <Stack justify="space-between">
                <Stack
                  gap={8}
                  w={{ base: "100%", sm: 442 }}
                  justify="space-between"
                >
                  <Title order={3} fw={500} c={"customColors.3"}>
                    {original_title}
                  </Title>
                  <Text c={"customColors.6"}>{release_date}</Text>
                  <Flex gap={8} h={28} align="center">
                    <Star
                      rate={Number(vote_average.toFixed(1))}
                      color="overall"
                    />
                    <Text lh={"50px"} c={"customColors.6"}>
                      ({vote_count})
                    </Text>
                  </Flex>
                </Stack>
              </Stack>
              <Box onClick={open}>
                <Star rate={rate} color={rate ? "user" : "inactive"} />
              </Box>
            </Flex>

            <Stack gap={12}>
              <InfoRow
                title={"Duration"}
                value={convertMinutesToHours(runtime)}
              />
              <InfoRow
                title={"Premiere"}
                value={moment(new Date(release_date)).format("MMMM DD, YYYY")}
              />
              <InfoRow
                title={"Budget"}
                value={"$" + budget.toLocaleString("en-US")}
              />
              <InfoRow
                title={"Gross worldwide"}
                value={"$" + revenue.toLocaleString("en-US")}
              />
              <InfoRow
                title={"Genres"}
                value={genres
                  .reduce<string[]>((acc, genre) => {
                    acc.push(genre.name);
                    return acc;
                  }, [])
                  .join(", ")}
              />
            </Stack>
          </Stack>
        </Flex>
      </Card>
      <StyledModal
        original_title={original_title}
        rate={rate}
        opened={opened}
        close={close}
        handleSaveToLocal={handleSaveToLocal}
        handleRemoveRate={handleRemoveRate}
      />
    </>
  );
};

export default BasicDataCard;
