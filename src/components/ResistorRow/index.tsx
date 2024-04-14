import React from "react";
import {
  ResistorButtonProps,
  useResistorCalculatorContext,
} from "@contexts/ResistorCalculatorContext";
import { Button, Container, Text } from "./styles";

type Props = {
  buttons: ResistorButtonProps;
  field: "first" | "second" | "multiplier" | "tolerance";
};

const ResistorRow = ({ buttons, field }: Props) => {
  const { updateResistance } = useResistorCalculatorContext();
  return (
    <Container>
      {buttons.map((button) => (
        <Button
          key={`${button.value}${button.background}`}
          onPress={() => {
            if (button.text) updateResistance(field, button.value);
          }}
          backgroud={button.background}
        >
          <Text color={button.color}>{button.text}</Text>
        </Button>
      ))}
    </Container>
  );
};

export default ResistorRow;
