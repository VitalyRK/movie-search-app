import { Button, Flex, Image, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";

const WatchedEmpty = () => {
  return (
    <Flex
      gap={16}
      h={"100%"}
      direction={"column"}
      justify={"center"}
      align={"center"}
    >
      <Image src="/not-rated.png" w={400} h={300} alt="not rated films" />
      <Text size="24px" fw={600} lh={"24px"}>
        You haven&#8217;t rated any films yet
      </Text>
      <NavLink to={"/"}>
        <Button color="purple.3">Find movies</Button>
      </NavLink>
    </Flex>
  );
};

export default WatchedEmpty;
