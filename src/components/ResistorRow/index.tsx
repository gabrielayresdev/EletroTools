import React from "react";
import { useResistorCalculatorContext } from "@contexts/ResistorCalculatorContext";
import { Button, Container, Text } from "./styles";

type Props = {
  buttons: {
    value: number;
    color?: string;
    background: string;
    text: string;
  }[];
  field: "first" | "second" | "multiplier" | "tolerance";
};

const ResistorRow = ({ buttons, field }: Props) => {
  const { updateResistance } = useResistorCalculatorContext();
  return (
    <Container>
      {buttons.map((button) => (
        <Button
          key={`${button.value}${button.background}`}
          onPress={() => updateResistance(field, button.value)}
          backgroud={button.background}
        >
          <Text color={button.color}>{button.text}</Text>
        </Button>
      ))}
    </Container>
  );
};

export default ResistorRow;
