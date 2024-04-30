import { NavLink } from "react-router-dom";
import { Button, Container, Flex, Image, Text } from "@mantine/core";
import Logo from "../../components/logo/Logo";

const NotFound = () => {
  return (
    <Flex bg={"customColors.0"} justify={"center"} h={"100%"}>
      <Flex
        h={"100%"}
        miw={"1440px"}
        direction={"column"}
        justify={"center"}
        align={"center"}
        style={{ position: "relative" }}
      >
        <Container style={{ position: "absolute", top: "24px", left: "24px" }}>
          <Logo />
        </Container>
        <Image src="/not-found.png" w={400} h={300} alt="not rated films" />
        <Text mt={48} mb={16} size="24px" fw={600} lh={"24px"}>
          We can&#8217;t find the page you are looking for
        </Text>
        <NavLink to={"/"}>
          <Button color="purple.3">Go Home</Button>
        </NavLink>
      </Flex>
    </Flex>
  );
};

export default NotFound;
