import { CSSProperties } from "react";

export type DagymAddressProps = {
  address: string;
};

const DagymAddress = (props: DagymAddressProps) => {
  const addressStyle: CSSProperties = {
    color: "#999fa9",
    fontSize: "12px",
    lineHeight: "20px",
    gap: "6px",
  };
  return <span style={addressStyle}>{props.address}</span>;
};

export default DagymAddress;
