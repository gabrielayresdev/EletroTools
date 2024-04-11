import React from "react";
import { Text, View } from "react-native";
import ResistorTable from "../../components/ResistorTable/ResistorTable";
import { useResistorCalculatorContext } from "../../contexts/ResistorCalculatorContext";

const ResistorCalculator = () => {
  const { resistance, parseResistanceToInt } = useResistorCalculatorContext();

  return (
    <View>
      <Text>{parseResistanceToInt(resistance)} Ω</Text>
      <ResistorTable />
    </View>
  );
};

export default ResistorCalculator;
