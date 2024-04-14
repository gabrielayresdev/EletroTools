import React from "react";
import ResistorTable from "@components/ResistorTable";
import ResistanceDisplay from "@components/ResistanceDisplay";
import { useResistorCalculatorContext } from "@contexts/ResistorCalculatorContext";
import { Container, Header, Img } from "./Styles";
import { Dimensions, Text } from "react-native";
import ResistorSvg from "@components/ResistorSvg";
import ResistorLinks from "@assets/ResistorLinks.png";

const ResistorCalculator = () => {
  const { resistance, colors } = useResistorCalculatorContext();
  const { width } = Dimensions.get("window");

  return (
    <Container>
      <Header>
        <Text>Voltar</Text>
        <ResistanceDisplay resistance={resistance} />
      </Header>
      <ResistorSvg {...colors} />
      <Img source={ResistorLinks} />
      <ResistorTable />
    </Container>
  );
};

export default ResistorCalculator;
