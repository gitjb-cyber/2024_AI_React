import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  const plusClick = () => {
    setNum((prev) => prev + 1);
  };
  const minusClick = () => {
    setNum((prev) => (prev == 0 ? 0 : prev - 1));
  };

  return (
    <>
      <button onClick={minusClick}>-</button>
      <span style={{ backgroundColor: num >= 10 ? "red" : "white" }}>
        {num}
      </span>
      <button onClick={plusClick}>+</button>
    </>
  );
};
export default Counter;
