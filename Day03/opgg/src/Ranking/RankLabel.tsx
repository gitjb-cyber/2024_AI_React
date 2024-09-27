import { CSSProperties } from "react";

export type RankLabelProps = {
  rankLabel: number;
};

const RankLabel = (props: RankLabelProps) => {
  const RenkLabelStyle: CSSProperties = {
    display: "inline-block",
    width: "20px",
    height: "16px",
    color: "#9AA4AF",
  };
  return <span style={RenkLabelStyle}>{props.rankLabel}</span>;
};

export default RankLabel;
