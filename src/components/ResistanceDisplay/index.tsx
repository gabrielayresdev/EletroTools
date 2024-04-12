import React from "react";
import { Container, Icon, ResistanceValue } from "./styles";
import { formatNumber } from "@utils/formatNumber";
import ResistorIcon from "@assets/resistor.png";

type Props = {
  resistance: number[];
};
const ResistanceDisplay = ({ resistance }: Props) => {
  const [resistanceString, setResistanceString] = React.useState("");

  React.useEffect(() => {
    const digits = Number(`${resistance[0]}${resistance[1]}`);
    setResistanceString(formatNumber(digits * resistance[2]));
  }, [resistance]);
  return (
    <Container>
      <Icon source={ResistorIcon} />
      <ResistanceValue>{resistanceString} Ω</ResistanceValue>
    </Container>
  );
};

export default ResistanceDisplay;
