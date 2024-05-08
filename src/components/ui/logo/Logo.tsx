import { Flex, Image, Title } from "@mantine/core";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <Flex gap={12}>
      <Image src="/logo.svg" w={32} h={32} alt="Logo" />
      <NavLink to={"/"}>
        <Title
          order={2}
          c={"customColors.2"}
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          ArrowFlicks
        </Title>
      </NavLink>
    </Flex>
  );
}

export default Logo;
