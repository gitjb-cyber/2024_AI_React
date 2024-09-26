import { CSSProperties } from "react";
import Circle from "./Circle";

type CircleGridLayoutProps = {
  columnNumber: number;
};

const CircleGridLayout = (props: CircleGridLayoutProps) => {
  const CircleGridLayoutStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.columnNumber}, 1fr)`,
    gap: "50px",
  };
  return (
    <section style={CircleGridLayoutStyle}>
      {Array(
        "#1abc9c",
        "#2ecc71",
        "#3498db",
        "#9b59b6",
        "#34495e",
        "#16a085",
        "#27ae60",
        "#2980b9",
        "#8e44ad",
        "#2c3e50"
      ).map((v) => (
        <Circle backgroundColor={v} />
      ))}
    </section>
  );
};

export default CircleGridLayout;
