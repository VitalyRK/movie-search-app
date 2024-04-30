import { createTheme } from "@mantine/core";

export const theme = createTheme({
  cursorType: "pointer",
  fontFamily: '"Inter", sans-serif',
  colors: {
    customColors: [
      "#F5F5F6", // bg main
      "#F2EBF9", // bg nav
      "#E5D5FA", // purple hover
      "#9854F6", // main color
      "#FAB005", // stars
      "#000000", // text black
      "#7B7C88", // text gray
      "#ACADB9", // playceholder
      "#D5D6DC", // gray line
      "#EAEBED", // gray line inactive
    ],
    purple: [
      "#F2EBF9",
      "#E5D5FA",
      "#beabf0",
      "#9854F6",
      "#7c56de",
      "#683dd9",
      "#5f2fd8",
      "#4f23c0",
      "#451eac",
      "#3a1899",
    ],
  },
  primaryColor: "purple",
  headings: {
    fontFamily: '"Inter", sans-serif',
    sizes: {
      h1: {
        fontSize: "32px",
        fontWeight: "700",
        lineHeight: "140%",
      },
      h2: {
        fontSize: "24px",
        fontWeight: "600",
        lineHeight: "140%",
      },
    },
  },
});
