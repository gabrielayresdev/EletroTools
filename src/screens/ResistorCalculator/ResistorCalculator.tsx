import React from "react";
import { Text, View } from "react-native";
import ResistorTable from "../../components/ResistorTable/ResistorTable";
import { useResistorCalculatorContext } from "../../contexts/ResistorCalculatorContext";
import { Container } from "./Styles";

const ResistorCalculator = () => {
  const { resistance, parseResistanceToInt } = useResistorCalculatorContext();

  return (
    <Container>
      <Text>{parseResistanceToInt(resistance)} Ω</Text>
      <ResistorTable />
    </Container>
  );
};

export default ResistorCalculator;
