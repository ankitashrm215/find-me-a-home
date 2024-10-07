//themes
import { ThemeProvider } from "@emotion/react";
import defaultTheme from "./themes/defaultTheme";

//layout
import BasicLayout from "./Layout/BasicLayout";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BasicLayout />
    </ThemeProvider>
  );
}
