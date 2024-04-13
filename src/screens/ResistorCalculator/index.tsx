import React from "react";
import ResistorTable from "@components/ResistorTable";
import ResistanceDisplay from "@components/ResistanceDisplay";
import { useResistorCalculatorContext } from "@contexts/ResistorCalculatorContext";
import { Container, Header } from "./Styles";
import { Text } from "react-native";
import ResistorSvg from "@components/ResistorSvg";

const ResistorCalculator = () => {
  const { resistance } = useResistorCalculatorContext();

  return (
    <Container>
      <Header>
        <Text>Voltar</Text>
        <ResistanceDisplay resistance={resistance} />
      </Header>
      <ResistorSvg />
      <ResistorTable />
    </Container>
  );
};

export default ResistorCalculator;
