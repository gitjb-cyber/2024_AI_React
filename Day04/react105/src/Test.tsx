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
      return { ...prev, apple: fruits.apple.amount + 1, price: 1000 };
    });
  };

  const changeBanana = () => {
    setFruits((prev) => {
      return { ...prev, banana: fruits.banana.amount };
    });
  };

  const changeOrange = () => {
    setFruits((prev) => {
      return { ...prev, orange: fruits.orange.amount };
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
        frutiAmount={fruits.apple.amount}
      ></Fruits>
      <Fruits
        click={changeOrange}
        fruitName={"오렌지"}
        frutiAmount={fruits.apple.amount}
      ></Fruits>
    </div>
  );
};

export default Test;
