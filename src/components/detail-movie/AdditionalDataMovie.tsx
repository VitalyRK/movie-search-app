import {
  Card,
  Stack,
  Image,
  Title,
  AspectRatio,
  Divider,
  Text,
  Group,
} from "@mantine/core";
import { IMAGES_BASE_URL } from "../../helpers/constants";
import { IMovieDetail } from "../../helpers/types";

interface AdditionalDataMovieProps {
  props: IMovieDetail;
}

const AdditionalDataMovie = ({
  props: { videos, overview, production_companies },
}: AdditionalDataMovieProps) => {
  return (
    <Card padding="24px" radius="12px" w={800}>
      <Stack gap={20} h={"100%"}>
        <Stack gap={16}>
          <Title order={4}>Trailer</Title>
          {videos.results.length !== 0 && (
            <AspectRatio w={500} ratio={16 / 9}>
              <iframe
                src={`https://www.youtube.com/embed/${videos.results[0].key}`}
                title={videos.results[0].name}
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </AspectRatio>
          )}
        </Stack>
        <Divider color="customColors.6" />
        <Stack gap={16}>
          <Title order={4}>Description</Title>
          <Text>{overview}</Text>
        </Stack>
        <Divider color="customColors.6" />
        <Stack gap={16}>
          <Title order={4}>Production</Title>
          <Stack gap={12}>
            {production_companies.map((company, id) => {
              return (
                <Group key={`company-${id}`} gap={8}>
                  <Image
                    src={
                      company.logo_path
                        ? IMAGES_BASE_URL + "w45/" + company.logo_path
                        : "./clapperboard.svg"
                    }
                    h={40}
                    w={40}
                    fit="contain"
                    alt="Logo of company"
                  />
                  <Title order={5}>{company.name}</Title>
                </Group>
              );
            })}
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export default AdditionalDataMovie;
