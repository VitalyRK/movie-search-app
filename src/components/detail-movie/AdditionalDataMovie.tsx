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
  const hidden =
    videos.results.length === 0 &&
    overview === "" &&
    production_companies.length === 0;
  if (hidden) return <></>;

  return (
    <Card
      p={{ base: "14px", sm: "24px" }}
      radius="12px"
      w={{ base: "100%", sm: 540, lg: 800 }}
    >
      <Stack gap={20} h={"100%"}>
        {videos.results.length > 0 && (
          <Stack gap={16}>
            <Title order={4}>Trailer</Title>
            {videos.results.length !== 0 && (
              <AspectRatio w={{ base: "100%", sm: 500 }} ratio={16 / 9}>
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
        )}
        {videos.results.length > 0 && <Divider color="customColors.6" />}
        {overview && (
          <Stack gap={16}>
            <Title order={4}>Description</Title>
            <Text>{overview}</Text>
          </Stack>
        )}
        {production_companies.length > 0 && <Divider color="customColors.6" />}
        {production_companies.length > 0 && (
          <Stack gap={16}>
            <Title order={4}>Production</Title>
            <Stack gap={12}>
              {production_companies.map((company, id) => {
                return (
                  <Group key={`company-${id}`} gap={8}>
                    {company.logo_path ? (
                      <Image
                        style={{
                          padding: "1px",
                          border: "0.5px solid #F1F1F1",
                          borderRadius: "100%",
                        }}
                        w={40}
                        h={40}
                        fit="contain"
                        src={IMAGES_BASE_URL + "w45/" + company.logo_path}
                        alt="Logo of company"
                      />
                    ) : (
                      <Image
                        src={"../clapperboard.svg"}
                        alt="Not logo of company"
                      />
                    )}
                    <Title order={5}>{company.name}</Title>
                  </Group>
                );
              })}
            </Stack>
          </Stack>
        )}
      </Stack>
    </Card>
  );
};

export default AdditionalDataMovie;
