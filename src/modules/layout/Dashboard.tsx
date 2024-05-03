import { Burger, Drawer, Flex, Stack } from "@mantine/core";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import { useDisclosure } from "@mantine/hooks";
import NavButton from "../../components/nav-menu/NavButton";
import NavMenu from "../../components/nav-menu/NavMenu";

function Dashboard() {
  const [opened, { open, close }] = useDisclosure();

  return (
    <Flex h={"100%"} m={"auto"} bg={"customColors.0"}>
      <Burger
        style={{ position: "absolute", top: "20px", right: "20px" }}
        opened={opened}
        onClick={open}
        hiddenFrom="md"
        size="md"
      />

      <Stack
        p={24}
        w={"280"}
        bg={"customColors.1"}
        display={{ base: "none", md: "flex" }}
      >
        <Logo />
        <Stack gap={16} mt={80}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "activeNavButton" : "inactiveNavButton"
            }
          >
            <NavButton title="Movies" />
          </NavLink>

          <NavLink
            to="/watched"
            className={({ isActive }) =>
              isActive ? "activeNavButton" : "inactiveNavButton"
            }
          >
            <NavButton title="Rated movies" />
          </NavLink>
        </Stack>
      </Stack>
      <Flex style={{ flexGrow: "1" }} p={0} justify="center">
        <Stack
          gap={40}
          maw={"980px"}
          m={{ base: "20px", md: "40px 20px" }}
          p={0}
        >
          <Outlet />
        </Stack>
      </Flex>
      <Drawer opened={opened} onClose={close} closeOnEscape>
        <NavMenu />
      </Drawer>
    </Flex>
  );
}

export default Dashboard;
