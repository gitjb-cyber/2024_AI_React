import { CSSProperties } from "react";

type boxType = {
  backgroundColor: "red" | "blue" | "green" | "orange";
  width: string;
  height: string;
  text: string;
};

const Box = (props: boxType) => {
  const boxStyle: CSSProperties = {
    backgroundColor: props.backgroundColor,
    width: props.width,
    height: props.height,
  };
  return <div style={boxStyle}>{props.text}</div>;
};

export default Box;
