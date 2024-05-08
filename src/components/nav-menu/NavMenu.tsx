import { Stack } from "@mantine/core";
import NavButton from "./NavButton";
import Logo from "../ui/logo/Logo";

interface NavMenuProps {
  onClose: () => void;
}

function NavMenu({ onClose: close }: NavMenuProps) {
  return (
    <>
      <Logo />
      <Stack gap={16} mt={80}>
        <NavButton onClose={close} path="/" title="Movies" />
        <NavButton onClose={close} path="/watched" title="Rated movies" />
      </Stack>
    </>
  );
}

export default NavMenu;
