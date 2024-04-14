import React from "react";
import ResistorRow from "@components/ResistorRow";
import { Container } from "./styles";
import { useResistorCalculatorContext } from "@contexts/ResistorCalculatorContext";

const ResistorTable = () => {
  const { digits, multiplier, tolerance } = useResistorCalculatorContext();
  return (
    <Container>
      <ResistorRow buttons={digits} field="first" />
      <ResistorRow buttons={digits} field="second" />
      <ResistorRow buttons={multiplier} field="multiplier" />
      <ResistorRow buttons={tolerance} field="tolerance" />
    </Container>
  );
};

export default ResistorTable;
