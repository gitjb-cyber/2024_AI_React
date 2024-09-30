import Musinsa, { MusinsaProps } from "./Musinsa";

type TotalProps = MusinsaProps;

const Total = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>총 {}개</span>
      <span>{}원</span>
    </div>
  );
};

export default Total;
