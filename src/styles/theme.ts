import { Button, TextInput, createTheme } from "@mantine/core";

export const theme = createTheme({
  breakpoints: {
    xs: "320px",
    sm: "560px",
    md: "800px",
    lg: "1165px",
    xl: "1440px",
  },
  cursorType: "pointer",
  fontFamily: '"Inter", sans-serif',
  colors: {
    customColors: [
      "#FFFFFF", // White
      "#F2EBF9", // Purple 100 Background
      "#9854F6", // Purple 500 Main
      "#FAB005", // Yellow
      "#F5F5F6", // Grey 100
      "#EAEBED", // Grey 200
      "#D5D6DC", // Grey 300
      "#ACADB9", // Grey 500
      "#7B7C88", // Grey 600
      "#232134", // Black
    ],
    purpleMain: [
      "#F2ECFA", // Purple 100
      "#E5D5FA", // Purple 200
      "#D1B4F8", // Purple 300
      "#BD93F7", // Purple 400
      "#9854F6", // Purple 500
      "#541F9D", // Purple 600
      "#9854F6", // Purple 500 Main
      "#BD93F7", // Purple 400 Hover
      "#451eac",
      "#3a1899",
    ],
  },
  primaryColor: "purpleMain",
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
      h3: {
        fontSize: "20px",
        fontWeight: "600",
        lineHeight: "24px",
      },
      h4: {
        fontSize: "20px",
        fontWeight: "700",
        lineHeight: "20px",
      },
      h5: {
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "140%",
      },
    },
  },
});
