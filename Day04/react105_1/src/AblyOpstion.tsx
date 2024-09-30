import { CSSProperties, useState } from "react";

type AblyOptionProps = {
  name: string;
  price: number;
};

const AblyOption = (props: AblyOptionProps) => {
  const boxStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "20px",
    border: "1px sold red",
    width: "500px",
    backgroundColor: "black",
  };
  const [num, setNum] = useState(1);
  const plusClick = () => {
    setNum((prev) => prev + 1);
  };
  const minusClick = () => {
    setNum((prev) => (prev == 1 ? 1 : prev - 1));
  };
  return (
    <div style={boxStyle}>
      <div style={{ fontWeight: "800px" }}>{props.name}</div>
      <button style={{ borderRadius: "999px" }} onClick={minusClick}>
        -
      </button>
      <span>{num}</span>
      <button style={{ borderRadius: "999px" }} onClick={plusClick}>
        +
      </button>
      <span>{props.price * num}원</span>
    </div>
  );
};

export default AblyOption;
