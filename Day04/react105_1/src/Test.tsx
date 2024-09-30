import { useState } from "react";
import Fruits from "./Fruits";

const Test = () => {
  const [fruits, setFruits] = useState({
    apple: { amount: 0, price: 1000 },
    banana: { amount: 0, price: 1500 },
    orange: { amount: 0, price: 2000 },
  });

  // 사과 : 1000원, 바나나 : 1500원, 오렌지 : 2000원 +총 가격

  const changeApple = () => {
    setFruits((prev) => {
      return { ...prev, amount: prev.apple.amount + 1 };
    });
  };

  const changeBanana = () => {
    setFruits((prev) => {
      return { ...prev, amount: prev.banana.amount + 1 };
    });
  };

  const changeOrange = () => {
    setFruits((prev) => {
      return { ...prev, amount: prev.orange.amount + 1 };
    });
  };

  return (
    <div>
      <Fruits
        click={changeApple}
        fruitName={"사과"}
        frutiAmount={fruits.apple.amount}
      ></Fruits>
      <Fruits
        click={changeBanana}
        fruitName={"바나나"}
        frutiAmount={fruits.banana.amount}
      ></Fruits>
      <Fruits
        click={changeOrange}
        fruitName={"오렌지"}
        frutiAmount={fruits.orange.amount}
      ></Fruits>
    </div>
  );
};

export default Test;
