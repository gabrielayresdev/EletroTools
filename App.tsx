import { ThemeProvider } from "styled-components/native";
import theme from "./src/themes/theme";
import { StatusBar } from "react-native";
import ResistorCalculator from "./src/screens/ResistorCalculator/ResistorCalculator";
import { ResistorCalculatorContextProvider } from "./src/contexts/ResistorCalculatorContext";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ThemeProvider theme={theme}>
        {fontsLoaded && (
          <ResistorCalculatorContextProvider>
            <ResistorCalculator />
          </ResistorCalculatorContextProvider>
        )}
      </ThemeProvider>
    </>
  );
}
