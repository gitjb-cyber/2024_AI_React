import { CSSProperties } from "react";

export type DagymPriceProps = {
  price: number;
};

const DagymPrice = (props: DagymPriceProps) => {
  const DagymPriceStyle: CSSProperties = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#3d4149",
    display: "flex",
    flexDirection: "row",

    justifyContent: "end",
    gap: "5px",
  };
  return (
    <div style={DagymPriceStyle}>
      <span>{props.price}</span>
      <span>~/월</span>
    </div>
  );
};

export default DagymPrice;
