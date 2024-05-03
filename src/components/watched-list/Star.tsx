import { Flex, Group, Text } from "@mantine/core";

interface StarProps {
  color: "inactive" | "user" | "overall";
  rate: number;
}

const Colors = {
  inactive: "#D5D6DC",
  user: "#9854F6",
  overall: "#FAB005",
};

const Star = ({ color, rate }: StarProps) => {
  return (
    <Flex h={28} gap={4} align={"center"}>
      <svg
        width="28.000000"
        height="28.000000"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <desc>Created with Pixso.</desc>
        <defs>
          <clipPath id="clip3_427">
            <rect
              id="star"
              width="28.000000"
              height="28.000000"
              fill="white"
              fillOpacity="0"
            />
          </clipPath>
        </defs>
        <g clipPath="url(#clip3_427)">
          <path
            id="Vector"
            d="M13.99 20.7L6.79 24.49L8.17 16.47L2.34 10.79L10.39 9.63L13.99 2.33L17.59 9.63L25.64 10.79L19.8 16.47L21.18 24.49L13.99 20.7Z"
            fill={Colors[color]}
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M6.79 24.49L8.17 16.47L2.34 10.79L10.39 9.63L13.99 2.33L17.59 9.63L25.64 10.79L19.8 16.47L21.18 24.49L13.99 20.7L6.79 24.49Z"
            stroke={Colors[color]}
            strokeOpacity="1.000000"
            strokeWidth="2.000000"
            strokeLinejoin="round"
          />
        </g>
      </svg>
      <Text fw={600} lh={"20px"}>
        {rate}
      </Text>
    </Flex>
  );
};

export default Star;
