import { CSSProperties } from "react";

type circleProps = {
  backgroundColor: string;
};

const Circle = (props: circleProps) => {
  const circleStyle: CSSProperties = {
    backgroundColor: props.backgroundColor,
    borderRadius: "9999px",
    width: "50px",
    height: "50px",
    border: "none",
  };
  return <div style={circleStyle}></div>;
};

export default Circle;
