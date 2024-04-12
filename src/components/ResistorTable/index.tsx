import React from "react";
import ResistorRow from "@components/ResistorRow";
import { Container } from "./styles";

const digits = [
  { value: 0, background: "#110A03", text: "0", color: "#ECF4FE" },
  { value: 1, background: "#A35200", text: "1" },
  { value: 2, background: "#DF2A39", text: "2" },
  { value: 3, background: "#F68B28", text: "3" },
  { value: 4, background: "#FFEE70", text: "4" },
  { value: 5, background: "#83EC83", text: "5" },
  { value: 6, background: "#89CFF0", text: "6" },
  { value: 7, background: "#FF70FF", text: "7" },
  { value: 8, background: "#A3A3A3", text: "8" },
  { value: 9, background: "#FFFFFF", text: "9" },
];

const multiplier = [
  { value: 1, background: "#110A03", text: "1 Ω", color: "#ECF4FE" },
  { value: 10, background: "#A35200", text: "10 Ω" },
  { value: 100, background: "#DF2A39", text: "100 Ω" },
  { value: 1000, background: "#F68B28", text: "1 kΩ" },
  { value: 10000, background: "#FFEE70", text: "10 kΩ" },
  { value: 100000, background: "#83EC83", text: "100 kΩ" },
  { value: 1000000, background: "#89CFF0", text: "1 MΩ" },
  { value: 10000000, background: "#FF70FF", text: "10 MΩ" },
  { value: 100000000, background: "#A3A3A3", text: "100 MΩ" },
  { value: 1000000000, background: "#FFFFFF", text: "1 GΩ" },
  { value: 0.1, background: "#E0A800", text: "0.1 Ω" },
  { value: 0.01, background: "#C0C0C0", text: "0.01 Ω" },
];

const tolerance = [
  { value: 0, background: "#110A03", text: "" },
  { value: 1, background: "#A35200", text: "± 1%" },
  { value: 2, background: "#DF2A39", text: "± 2%" },
  { value: 0, background: "#F68B28", text: "" },
  { value: 0, background: "#FFEE70", text: "" },
  { value: 0.5, background: "#83EC83", text: "± 0.5%" },
  { value: 0.25, background: "#89CFF0", text: "± 0.25%" },
  { value: 0.1, background: "#FF70FF", text: "± 0.1%" },
  { value: 0.05, background: "#A3A3A3", text: "± 0.05%" },
  { value: 0, background: "#FFFFFF", text: "" },
  { value: 5, background: "#E0A800", text: "± 5%" },
  { value: 10, background: "#C0C0C0", text: "± 10%" },
];

const ResistorTable = () => {
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
