import { useState } from "react";
import Coffee from "./Coffee";

const Cafe = () => {
  const [coffee, setCoffee] = useState({
    americano: { amount: 0, price: 2000 },
    latte: { amount: 0, price: 4000 },
    moka: { amount: 0, price: 4500 },
  });

  const plusAmericano = () => {
    setCoffee((prev) => ({
      ...prev,
      americano: { ...prev.americano, amount: prev.americano.amount + 1 },
    }));
  };

  const minusAmericano = () => {
    setCoffee((prev) => ({
      ...prev,
      americano: {
        ...prev.americano,
        amount:
          prev.americano.amount == 0
            ? prev.americano.amount
            : prev.americano.amount - 1,
      },
    }));
  };

  const plusLatte = () => {
    setCoffee((prev) => ({
      ...prev,
      latte: { ...prev.latte, amount: prev.latte.amount + 1 },
    }));
  };

  const minusLatte = () => {
    setCoffee((prev) => ({
      ...prev,
      latte: {
        ...prev.latte,
        amount:
          prev.latte.amount == 0 ? prev.latte.amount : prev.latte.amount - 1,
      },
    }));
  };

  const plusMoka = () => {
    setCoffee((prev) => ({
      ...prev,
      moka: { ...prev.moka, amount: prev.moka.amount + 1 },
    }));
  };

  const minusMoka = () => {
    setCoffee((prev) => ({
      ...prev,
      moka: {
        ...prev.moka,
        amount: prev.moka.amount == 0 ? prev.moka.amount : prev.moka.amount - 1,
      },
    }));
  };

  // 총 개수와 총 가격 계산
  const totalCount =
    coffee.americano.amount + coffee.latte.amount + coffee.moka.amount;
  const totalPrice =
    coffee.americano.amount * coffee.americano.price +
    coffee.latte.amount * coffee.latte.price +
    coffee.moka.amount * coffee.moka.price;

  return (
    <div>
      <Coffee
        click={plusAmericano}
        click1={minusAmericano}
        coffeeName="아메리카노"
        coffeeAmount={coffee.americano.amount}
      />
      <Coffee
        click={plusLatte}
        click1={minusLatte}
        coffeeName="라떼"
        coffeeAmount={coffee.latte.amount}
      />
      <Coffee
        click={plusMoka}
        click1={minusMoka}
        coffeeName="모카"
        coffeeAmount={coffee.moka.amount}
      />

      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        <p>총 개수: {totalCount}</p>
        <p>총 가격: {totalPrice.toLocaleString()} 원</p>
        {/* toLocaleString: 천단위로 ,(콤마) */}
      </div>
    </div>
  );
};

export default Cafe;
