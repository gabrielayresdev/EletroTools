import React from "react";

type Field = "first" | "second" | "multiplier" | "error";

type ResistorCalculator = {
  resistance: number[];
  parseResistanceToInt: (resistance: number[]) => number;
  updateResistance: (field: Field, value: number) => void;
};

const ResistorCalculatorContext =
  React.createContext<ResistorCalculator | null>(null);

export const useResistorCalculatorContext = () => {
  const context = React.useContext(ResistorCalculatorContext);
  if (!context) throw new Error("useContext must be inside Provider");
  return context;
};

export const ResistorCalculatorContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [resistance, setResistance] = React.useState([0, 0, 0, 0]);
  function parseResistanceToInt(resistance: number[]) {
    const digits = Number(`${resistance[0]}${resistance[1]}`);
    console.log(digits);
    return digits * resistance[2];
  }
  function updateResistance(field: Field, value: number) {
    setResistance((current) => {
      let index;
      switch (field) {
        case "first":
          index = 0;
          break;
        case "second":
          index = 1;
          break;
        case "multiplier":
          index = 2;
          break;
        case "error":
          index = 3;
          break;
      }
      const copy = [...current];
      copy[index] = value;
      return copy;
    });
  }

  return (
    <ResistorCalculatorContext.Provider
      value={{
        resistance,
        parseResistanceToInt,
        updateResistance,
      }}
    >
      {children}
    </ResistorCalculatorContext.Provider>
  );
};
