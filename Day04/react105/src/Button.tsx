import { useState } from "react";

// react19 - state

const [food, setFood] = useState("마라탕");
const Button = () => {
  const tang = () => {
    setFood((prev) => {
      return prev + "후루 사주세요 선배!";
    });
  };

  return <button onClick={tang}>{food}</button>;
};

export default Button;
