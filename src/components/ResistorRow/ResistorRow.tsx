import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useResistorCalculatorContext } from "../../contexts/ResistorCalculatorContext";

type Props = {
  buttons: {
    value: number;
    color: string;
    text: string;
  }[];
  field: "first" | "second" | "multiplier" | "error";
};

const ResistorRow = ({ buttons, field }: Props) => {
  const { updateResistance } = useResistorCalculatorContext();
  return (
    <View>
      {buttons.map((button) => (
        <TouchableOpacity
          key={button.value}
          onPress={() => updateResistance(field, button.value)}
        >
          <Text>{button.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ResistorRow;
