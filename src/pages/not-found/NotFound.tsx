import { NavLink } from "react-router-dom";
import { Container, Flex, Image, Text } from "@mantine/core";
import Logo from "../../components/ui/logo/Logo";
import PrimaryButton from "../../components/ui/button/PrimaryButton";

const NotFound = () => {
  return (
    <Flex bg={"customColors.1"} justify={"center"} h={"100%"}>
      <Flex
        h={"100%"}
        w={"100%"}
        direction={"column"}
        justify={"center"}
        align={"center"}
        style={{ position: "relative" }}
      >
        <Container style={{ position: "absolute", top: "24px", left: "24px" }}>
          <Logo />
        </Container>
        <Image
          src="/not-found.png"
          w={{ base: 300, md: 400 }}
          h={300}
          alt="not rated films"
        />
        <Text mt={48} mb={16} ta="center" size="24px" fw={600} lh={"24px"}>
          We can&#8217;t find the page you are looking for
        </Text>
        <NavLink to={"/movies"}>
          <PrimaryButton title="Go Home" />
        </NavLink>
      </Flex>
    </Flex>
  );
};

export default NotFound;
