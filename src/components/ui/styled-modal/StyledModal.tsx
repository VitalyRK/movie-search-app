import { Modal, Group, Title, Stack, Rating, Button, Box } from "@mantine/core";
import PrimaryButton from "../button/PrimaryButton";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";

interface IProps {
  original_title: string;
  rate: number | null;
  opened: boolean;
  close: () => void;
  handleSaveToLocal: (value: number) => void;
  handleRemoveRate: () => void;
}

const StyledModal = ({
  original_title,
  rate,
  opened,
  close: closeModal,
  handleSaveToLocal,
  handleRemoveRate,
}: IProps) => {
  const [value, setValue] = useState(rate);
  const isMobile = useMediaQuery(`(max-width: 560px)`);

  return (
    <Modal
      padding={0}
      styles={{
        body: { width: isMobile ? "280px" : "380px" },
        content: { flex: "none" },
      }}
      opened={opened}
      onClose={closeModal}
      withCloseButton={false}
      centered
    >
      <Group
        w={"100%"}
        p={isMobile ? "10px" : "16px 11px 16px 16px"}
        justify="space-between"
        style={{
          borderBottom: "1px solid var(--mantine-color-customColors-5)",
        }}
      >
        <Title order={5}>Your rating</Title>
        <span
          className="interactive__button"
          style={{ cursor: "pointer" }}
          onClick={closeModal}
        >
          &#10005;
        </span>
      </Group>
      <Stack align="start" p={16} gap={16}>
        <Title order={5}>{original_title}</Title>
        <Rating
          style={{ justifyContent: "space-between", width: "100%" }}
          size={isMobile ? "md" : "lg"}
          count={10}
          value={value ?? undefined}
          onChange={setValue}
        />
        <Group gap={16}>
          <Box
            onClick={() => {
              value && handleSaveToLocal(value);
            }}
          >
            <PrimaryButton title="Save" />
          </Box>
          <Button
            style={{ fontWeight: 600, backgroundColor: "transparent" }}
            p={0}
            className={"interactive__button"}
            variant="transparent"
            onClick={() => {
              setValue(null);
              handleRemoveRate();
            }}
          >
            Remove rating
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};

export default StyledModal;
