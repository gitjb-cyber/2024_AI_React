import { CSSProperties } from "react";

type ButtonProps = {
  borderRadius: "Hard" | "Smooth" | "Circle";
  backgroundColor: "Primary" | "Hover" | "Deactive";
};
const Button = (props: ButtonProps) => {
  const borderRadiusStyle = {
    Hard: "0px",
    Smooth: "6px",
    Circle: "25px",
  };

  const backgroundColorStyle = {
    Primary: "#205BF3",
    Hover: "#478DF5",
    Deactive: "#979797",
  };
  const ButtonStyle: CSSProperties = {
    borderRadius: props.borderRadius,
    backgroundColor: props.backgroundColor,
    color: "white",
    padding: "15px 30px",
    fontSize: "32px",
    border: "none",
  };
  return <button style={ButtonStyle}></button>;
};

export default Button;
