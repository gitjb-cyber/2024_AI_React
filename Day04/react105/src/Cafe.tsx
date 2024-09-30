import { useState } from "react";
import Coffee from "./Coffee";

const Cafe = () => {
  const [coffee, setCoffee] = useState({
    americano: { amount: 0, price: 2000 },
    latte: { amount: 0, price: 4000 },
    moka: { amount: 0, price: 4500 },
  });
  const changeAmericano = () => {
    setCoffee((prev) => {
      return { ...prev, americano: coffee.americano.amount + 1, price: 2000 };
    });
  };

  const changeLatte = () => {
    setCoffee((prev) => {
      return { ...prev, latte: coffee.latte.amount + 1, price: 2000 };
    });
  };

  const changemoka = () => {
    setCoffee((prev) => {
      return { ...prev, moka: coffee.moka.amount + 1, price: 2000 };
    });
  };

  return (
    <div>
      <Coffee
        click={changeAmericano}
        coffeeName="아메리카노"
        coffeeAmount={coffee.americano.amount}
      ></Coffee>
    </div>
  );
};

export default Cafe;
