import { CSSProperties, ReactNode } from "react";

type GridLayoutProps = {
  columnNumber: number;
  components: ReactNode;
};

const GridLayout = (props: GridLayoutProps) => {
  const GridLayoutStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.columnNumber}, 1fr)`,
    gap: "30px",
  };
  return <section style={GridLayoutStyle}>{props.components}</section>;
};

export default GridLayout;
