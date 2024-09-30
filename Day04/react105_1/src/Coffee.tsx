type CoffeeProps = {
  coffeeName: string;
  coffeeAmount: number;
  click1: () => void;
  click: () => void;
};

const Coffee = (props: CoffeeProps) => {
  return (
    <div>
      <button onClick={props.click1}>-</button>
      <span>
        {props.coffeeName}: {props.coffeeAmount}
      </span>
      <button onClick={props.click}>+</button>
    </div>
  );
};

export default Coffee;
