import { CSSProperties, useState } from "react";

type MusinsaProps = {
  name: string;
  price: number;
};

const Musinsa = (props: MusinsaProps) => {
  const MusinsaStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "20px",
    border: "1px sold black",
    width: "500px",
    backgroundColor: "gray",
    borderRadius: "6px",
  };
  const [num, setNum] = useState(1);
  const plusClick = () => {
    setNum((prev) => prev + 1);
  };

  const minusClick = () => {
    setNum((prev) => (prev == 1 ? prev : prev - 1));
  };

  return (
    <div style={MusinsaStyle}>
      <div style={{ fontWeight: "800px" }}>{props.name}</div>
      <button
        style={{ gap: "5px", borderRadius: "999px", backgroundColor: "red" }}
        onClick={minusClick}
      >
        -
      </button>
      <span>{num}</span>
      <button
        style={{ gap: "5px", borderRadius: "999px", backgroundColor: "red" }}
        onClick={plusClick}
      >
        +
      </button>
      <span>{props.price * num}원</span>
    </div>
  );
};

export default Musinsa;
