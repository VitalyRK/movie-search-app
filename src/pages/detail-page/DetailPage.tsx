import { Stack } from "@mantine/core";

import DetailMovie from "../../components/detail-movie/DetailMovie";

function DetailPage() {
  return (
    <Stack gap={20} h={"100%"} w={{ base: "100%", lg: 800 }}>
      <DetailMovie />
    </Stack>
  );
}

export default DetailPage;
