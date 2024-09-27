import { CSSProperties } from "react";

export type DagymStarRateProps = {
  starRate: number;
};

const DagymStarRate = (props: DagymStarRateProps) => {
  const DagymStarRateStyle: CSSProperties = {
    color: "#FFC500",
    fontSize: "12px",
    fontWeight: "bold",
    gap: "6px",
  };
  return <span style={DagymStarRateStyle}>⭐{props.starRate}</span>;
};

export default DagymStarRate;
