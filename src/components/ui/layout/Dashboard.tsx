import { Burger, Drawer, Flex, Stack } from "@mantine/core";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Logo from "../logo/Logo";
import { useDisclosure } from "@mantine/hooks";
import NavButton from "../../nav-menu/NavButton";
import NavMenu from "../../nav-menu/NavMenu";
import { useEffect } from "react";

function Dashboard() {
  const [opened, { open, close }] = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    if (location.pathname === '/') return navigate('/movies');
  }, [])

  return (
    <Flex mih={"100%"} m={"auto"} bg={"customColors.4"}>
      <Burger
        style={{
          zIndex: 150,
          position: "absolute",
          top: "20px",
          right: "20px",
        }}
        opened={opened}
        onClick={open}
        hiddenFrom="md"
        size="md"
      />

      <Stack
        p={{ base: 10, md: 24 }}
        w={"280"}
        bg={"customColors.1"}
        display={{ base: "none", md: "flex" }}
      >
        <Logo />
        <Stack gap={16} mt={80}>
          <NavButton path="/movies" title="Movies" />
          <NavButton path="/watched" title="Rated movies" />
        </Stack>
      </Stack>

      <Flex style={{ flexGrow: "1" }} p={0} justify="center">
        <Stack
          gap={40}
          maw={980}
          w={"100%"}
          m={{ base: "20px 10px", md: "40px 20px" }}
          p={0}
          align="center"
        >
          <Outlet />
        </Stack>
      </Flex>

      <Drawer opened={opened} onClose={close}>
        <NavMenu onClose={close} />
      </Drawer>
    </Flex>
  );
}

export default Dashboard;
