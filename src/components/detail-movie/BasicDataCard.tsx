import { Card, Flex, Stack, Title, Image, Text } from "@mantine/core";
import moment from "moment";
import { IMAGES_BASE_URL } from "../../helpers/constants";
import { convertMinutesToHours } from "../../helpers/helper-functions";
import Star from "../ui/star/Star";
import InfoRow from "./InfoRow";
import { IMovieDetail } from "../../helpers/types";

interface BasicDataCardProps {
  props: IMovieDetail;
}

const BasicDataCard = ({
  props: {
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
  return (
    <Card padding="24px" radius="12px" h={400} w={800}>
      <Flex gap={16} h={"100%"}>
        <Image
          src={
            poster_path
              ? IMAGES_BASE_URL + "w342/" + poster_path
              : "./no-poster-lg.png"
          }
          height={"100%"}
          w={250}
          alt="Poster"
        />
        <Stack style={{ flexGrow: "1" }} justify="space-between">
          <Flex justify="space-between">
            <Stack justify="space-between">
              <Stack gap={8} w={442} justify="space-between">
                <Title order={3} fw={500} c={"customColors.3"}>
                  {original_title}
                </Title>
                <Text c={"customColors.6"}>{release_date}</Text>
                <Flex gap={8} h={28} align="center">
                  <Star rate={Number(vote_average)} color="overall" />
                  <Text lh={"50px"} c={"customColors.6"}>
                    ({vote_count})
                  </Text>
                </Flex>
              </Stack>
            </Stack>
            <Star rate={8} color="user" />
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
  );
};

export default BasicDataCard;
