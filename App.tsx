import { ThemeProvider } from "styled-components/native";
import Home from "./src/screens/Home/Home";
import theme from "./src/themes/theme";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
}
