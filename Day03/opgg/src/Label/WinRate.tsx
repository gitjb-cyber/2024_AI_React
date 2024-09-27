import { CSSProperties } from "react";

export type WinRateProps = {
  winRate: number;
};

const WinRate = (props: WinRateProps) => {
  const WinRateStyle: CSSProperties = {
    width: "94px",
    height: "41px",
    color: "#57646F",
    fontSize: "12px",
    backgroundColor: "#FFFFFF",
    padding: "4px",
    lineHeight: "16px",
  };
  return <div style={WinRateStyle}>{props.winRate}%</div>;
};

export default WinRate;
