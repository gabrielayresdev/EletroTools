import { ThemeProvider } from "styled-components/native";
import theme from "./src/themes/theme";
import { StatusBar } from "react-native";
import ResistorCalculator from "./src/screens/ResistorCalculator/ResistorCalculator";
import { ResistorCalculatorContextProvider } from "./src/contexts/ResistorCalculatorContext";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ThemeProvider theme={theme}>
        <ResistorCalculatorContextProvider>
          <ResistorCalculator />
        </ResistorCalculatorContextProvider>
      </ThemeProvider>
    </>
  );
}
