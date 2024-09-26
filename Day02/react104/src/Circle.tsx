import { CSSProperties } from "react";

type Circleprops = {
  backgroundColor: string;
};

const Circle = (props: Circleprops) => {
  const CircleStyle: CSSProperties = {
    backgroundColor: props.backgroundColor,
    borderRadius: "9999px",
    width: "50px",
    height: "50px",
    border: "none",
  };
  return <div style={CircleStyle}></div>;
};

export default Circle;
