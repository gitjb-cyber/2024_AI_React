import { CSSProperties } from "react";

export type tagProps = {
  text: string;
};

const DagymTag = (props: tagProps) => {
  const tagStyle: CSSProperties = {
    padding: "3px 6px",
    fontSize: "10px",
    fontWeight: "bold",
    borderRadius: "4px",
    backgroundColor: "#eaeeff",
    lineHeight: "16px",
    color: "#5467f5",
    border: "1px sold rgb(234, 238, 255)",
    gap: "6px",
  };

  return <span style={tagStyle}>{props.text}</span>;
};
export default DagymTag;
