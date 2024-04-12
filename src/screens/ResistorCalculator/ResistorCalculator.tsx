import React from "react";
import ResistorTable from "../../components/ResistorTable/ResistorTable";
import { useResistorCalculatorContext } from "../../contexts/ResistorCalculatorContext";
import { Container, Header } from "./Styles";
import ResistorIcon from "../../../assets/resistor.png";
import { Text } from "react-native";
import ResistanceDisplay from "../../components/ResistanceDisplay/ResistanceDisplay";

const ResistorCalculator = () => {
  const { resistance } = useResistorCalculatorContext();

  return (
    <Container>
      <Header>
        <Text>Voltar</Text>
        <ResistanceDisplay resistance={resistance} />
      </Header>
      <ResistorTable />
    </Container>
  );
};

export default ResistorCalculator;
