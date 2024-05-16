import { Flex, Title } from "@mantine/core";

interface SearchBarProps {
  title: string;
  children: React.ReactNode;
}

function SearchBarWrapper({ title, children }: SearchBarProps) {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap={20}
      h={{ base: 100, md: 55 }}
      w={"100%"}
      justify="space-between"
      align={{ base: "start", md: "center" }}
    >
      <Title order={1} fz={{ base: 24, lg: 32 }}>
        {title}
      </Title>
      {children}
    </Flex>
  );
}

export default SearchBarWrapper;
