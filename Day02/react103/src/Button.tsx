import { CSSProperties } from "react";

type ButtonProps = {
  borderRadius: "Hard" | "Smooth" | "Circle";
  backgroundColor: "Primary" | "Hover" | "Deactive";
};

const Button = ({ borderRadius, backgroundColor }: ButtonProps) => {
  const borderMap = {
    Hard: "0px",
    Smooth: "6px",
    Circle: "20px",
  };

  const backgroundColorMap = {
    Primary: "#205BF3",
    Hover: "#478DF5",
    Deactive: "#979797",
  };

  const button_style: CSSProperties = {
    borderRadius: borderMap[borderRadius],
    backgroundColor: backgroundColorMap[backgroundColor],
    color: "white",
    padding: "15px 30px",
    fontSize: "32px",
    border: "none",
  };
  return <button style={button_style}>button</button>;
};
export default Button;
