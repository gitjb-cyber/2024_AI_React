import { CSSProperties } from "react";

export type PickRateProps = {
  pickRate: number;
};

const PickRate = (props: PickRateProps) => {
  const PickRateStyle: CSSProperties = {
    width: "110px",
    height: "41px",
    color: "#57646F",
    fontSize: "12px",
    backgroundColor: "#FFFFFF",
    padding: "4px",
    lineHeight: "16px",
  };
  return <div style={PickRateStyle}>{props.pickRate}%</div>;
};

export default PickRate;
