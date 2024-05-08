import { Group, Text } from "@mantine/core";

interface IProps {
  title: string;
  value: string;
}

const InfoRow = ({ title, value }: IProps) => {
  return (
    <Group gap={8} wrap="nowrap" h={20} w={"100%"}>
      <Text c={"customColors.6"} w={140}>
        {title}
      </Text>
      <Text>{value}</Text>
    </Group>
  );
};

export default InfoRow;
