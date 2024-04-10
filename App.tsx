import { ThemeProvider } from "styled-components/native";
import Home from "./src/screens/Home/Home";
import theme from "./src/themes/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
