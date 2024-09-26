// Box 배경색 : pink, orange, skyblue, red
// 사이즈: small, medium, large -> 50*50, 100*100, 200*200

import { CSSProperties } from "react";

type BoxProps = {
  backgroundColor: "pink" | "orange" | "skyblue" | "red";
  size: "small" | "medium" | "large";
};

const Box = (props: BoxProps) => {
  const sizeMap = {
    small: "50px",
    medium: "100px",
    large: "200px",
  };
  const boxStyle: CSSProperties = {
    backgroundColor: props.backgroundColor,
    width: sizeMap[props.size],
    height: sizeMap[props.size],
  };
  return <div style={boxStyle}></div>;
};

export default Box;
