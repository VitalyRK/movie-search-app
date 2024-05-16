import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { MantineProvider } from "@mantine/core";
import { theme } from "./styles/theme";
import { RatedProvider } from "./context/RatedContext";

function App() {
  return (
    <MantineProvider theme={theme}>
      <RatedProvider>
        <RouterProvider router={router} />
      </RatedProvider>
    </MantineProvider>
  );
}

export default App;
