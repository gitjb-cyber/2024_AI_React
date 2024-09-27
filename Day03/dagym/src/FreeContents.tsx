import { CSSProperties } from "react";

type FreeContentsProps = {
  services: string;
};

const FreeContents = (props: FreeContentsProps) => {
  const FreeContentsStyle: CSSProperties = {
    backgroundColor: "#f1f3f6",
    padding: "8px 12px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "15px",
  };
  const freeStyle: CSSProperties = {
    fontSize: "12px",
  };
  const serviceStyle: CSSProperties = {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#999fa9",
  };

  return (
    <div style={FreeContentsStyle}>
      <span style={freeStyle}>무료 서비스</span>
      <span>{props.services}</span>
    </div>
  );
};

export default FreeContents;
