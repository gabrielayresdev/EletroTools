import React from "react";
import { Path } from "react-native-svg";
import { Container, Img, SVG } from "./styles";
import { Dimensions } from "react-native";
import P from "@assets/links.jpg";

type Props = {
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifht?: string;
};

const ResistorSvg = (props: Props) => {
  const { width } = Dimensions.get("window");
  return (
    <Container>
      <SVG
        width={width}
        height={(width * 77) / 430}
        viewBox={`0 0 430 77`}
        fill="none"
      >
        <Path
          d="M371.5 28.5L322.5 4v69l49-24V28.5zM300 0l-71 10v57l71 10V0zM153 0h-23l-.5 77 23.5-4V0z"
          fill="#FFDE91"
        />
        <Path
          d="M130 0l-22.5 4-.5 69 22.5 4 .5-77z"
          fill={props.first ? props.first : "#A35200"}
        />
        <Path d="M107.5 4L58 28v20.5L107 73l.5-69z" fill="#FFDE91" />
        <Path
          d="M175.5 3.5L153 0v73l22.5-2.5v-67z"
          fill={props.second ? props.second : "#DF2A39"}
        />
        <Path d="M206.5 10l-31-6.5v67l31-3.5V10z" fill="#FFDE91" />
        <Path
          d="M229 10h-22.5v57H229V10z"
          fill={props.third ? props.third : "#DF2A39"}
        />
        <Path
          d="M322.5 4L300 0v77l22.5-4V4z"
          fill={props.fourth ? props.fourth : "#E0A800"}
        />
        <Path
          d="M58 48.5V28H0v20.5h58zM371.5 28.5V49H430V28.5h-58.5z"
          fill="silver"
        />
      </SVG>
      {/*  <SVG
        width={width}
        height={(width * 58) / 430}
        viewBox="0 0 430 58"
        fill="none"
      >
        <Path
          d="M117 0v30.5H65.5V58m100-58v58M218 0v18.5h47.5V58m47-58v44h54v14"
          stroke="#000"
          strokeWidth={3}
        />
      </SVG> */}
    </Container>
  );
};

export default ResistorSvg;
