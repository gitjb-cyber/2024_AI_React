import { CSSProperties } from "react";
import Circle from "./Circle";

const GridLayoutCircle = () => {
  const gridStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "50px",
  };

  return (
    <section style={gridStyle}>
      {Array(10).fill(
        ["#1abc9c", "#2ecc71", "#3498db"].map((v) => (
          <Circle backgroundColor={v} />
        ))
      )}
    </section>
  );
};
