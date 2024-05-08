import { Button } from "@mantine/core";

interface PrimaryButtonProps {
  title: string;
  small?: boolean;
  submit?: boolean;
}

const PrimaryButton = ({ title, small, submit }: PrimaryButtonProps) => {
  return (
    <Button
      className="primary__button"
      variant="filled"
      type={submit ? "submit" : "button"}
      style={
        small
          ? {
              height: "32px",
              width: "88px",
              padding: "6px 20px",
              position: "absolute",
              right: "12px",
              borderRadius: "8px",
              fontSize: "14px",
              lineHeight: "140%",
            }
          : {}
      }
    >
      {title}
    </Button>
  );
};

export default PrimaryButton;
