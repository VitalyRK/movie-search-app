import { Flex, Image, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";
import PrimaryButton from "../ui/button/PrimaryButton";

const WatchedEmpty = () => {
  return (
    <Flex
      gap={16}
      h={"100%"}
      direction={"column"}
      justify={"center"}
      align={"center"}
    >
      <Image
        src="/not-rated.png"
        w={{ base: 300, sm: 400 }}
        h={300}
        alt="not rated films"
      />
      <Text ta="center" size="24px" fw={600} lh={"24px"}>
        You haven&#8217;t rated any films yet
      </Text>
      <NavLink to={"/movies"}>
        <PrimaryButton title="Find movies" />
      </NavLink>
    </Flex>
  );
};

export default WatchedEmpty;
