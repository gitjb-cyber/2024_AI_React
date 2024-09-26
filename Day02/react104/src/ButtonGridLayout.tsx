import { CSSProperties } from "react";
import Button from "./Button";

type ButtonGridLayoutProps = {
  reactNumber: number;
};
const ButtonGridLayout = (props: ButtonGridLayoutProps) => {
  const ButtonGridLayoutStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
  };
  return (
    <section style={ButtonGridLayoutStyle}>
      <Button backgroundColor="Primary" borderRadius="Hard"></Button>
      <Button backgroundColor="Primary" borderRadius="Smooth"></Button>
      <Button backgroundColor="Primary" borderRadius="Circle"></Button>
      <Button backgroundColor="Hover" borderRadius="Hard"></Button>
      <Button backgroundColor="Hover" borderRadius="Smooth"></Button>
      <Button backgroundColor="Hover" borderRadius="Circle"></Button>
      <Button backgroundColor="Deactive" borderRadius="Hard"></Button>
      <Button backgroundColor="Deactive" borderRadius="Smooth"></Button>
      <Button backgroundColor="Deactive" borderRadius="Circle"></Button>
    </section>
  );
};
export default ButtonGridLayout;
