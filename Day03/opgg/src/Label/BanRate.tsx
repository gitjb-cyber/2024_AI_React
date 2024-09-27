import { CSSProperties } from "react";

export type BanRateProps = {
  banRate: number;
};

const BanRate = (props: BanRateProps) => {
  const BanRateStyle: CSSProperties = {
    width: "94px",
    height: "41px",
    color: "#57646F",
    fontSize: "12px",
    backgroundColor: "#FFFFFF",
    padding: "4px",
    lineHeight: "16px",
    display: "flex",
    flexDirection: "column",
  };
  return <div style={BanRateStyle}>{props.banRate}%</div>;
};

export default BanRate;
