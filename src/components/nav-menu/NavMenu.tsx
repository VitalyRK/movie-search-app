import { Stack } from "@mantine/core";
import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";
import Logo from "../logo/Logo";

function NavMenu() {
  return (
    <>
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
    </>
  );
}

export default NavMenu;
