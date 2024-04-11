import React from "react";
import { StyleSheet, View } from "react-native";
import ResistorRow from "../ResistorRow/ResistorRow";

const digits = [
  { value: 0, color: "#110A03", text: "0" },
  { value: 1, color: "#A35200", text: "1" },
  { value: 2, color: "#DF2A39", text: "2" },
  { value: 3, color: "#F68B28", text: "3" },
  { value: 4, color: "#FFEE70", text: "4" },
  { value: 5, color: "#83EC83", text: "5" },
  { value: 6, color: "#89CFF0", text: "6" },
  { value: 7, color: "#FF70FF", text: "7" },
  { value: 8, color: "#A3A3A3", text: "8" },
  { value: 9, color: "#FFFFFF", text: "9" },
];

const multiplier = [
  { value: 1, color: "#110A03", text: "1 Ω" },
  { value: 10, color: "#A35200", text: "10 Ω" },
  { value: 100, color: "#DF2A39", text: "100 Ω" },
  { value: 1000, color: "#F68B28", text: "1 kΩ" },
  { value: 10000, color: "#FFEE70", text: "10 kΩ" },
  { value: 100000, color: "#83EC83", text: "100 kΩ" },
  { value: 1000000, color: "#89CFF0", text: "1 MΩ" },
  { value: 10000000, color: "#FF70FF", text: "10 MΩ" },
  { value: 100000000, color: "#A3A3A3", text: "100 MΩ" },
  { value: 1000000000, color: "#FFFFFF", text: "1 GΩ" },
  { value: 0.1, color: "#FFFFFF", text: "0.1 Ω" },
  { value: 0.01, color: "#FFFFFF", text: "0.01 Ω" },
];

const ResistorTable = () => {
  return (
    <View style={styles.container}>
      <ResistorRow buttons={digits} field="first" />
      <ResistorRow buttons={digits} field="second" />
      <ResistorRow buttons={multiplier} field="multiplier" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 30,
  },
});

export default ResistorTable;
