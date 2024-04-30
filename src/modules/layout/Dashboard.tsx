import { Container, Flex } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import NavMenu from "../../components/nav-menu/NavMenu";

function Dashboard() {
  return (
    <Flex h={"100%"} m={"auto"} bg={"customColors.0"} maw={"1440px"}>
      <Container p={24} m={0} w={"280"} bg={"customColors.1"}>
        <Logo />
        <NavMenu />
      </Container>
      <Container style={{ flexGrow: "1" }}>
        <Outlet />
      </Container>
    </Flex>
  );
}

export default Dashboard;
