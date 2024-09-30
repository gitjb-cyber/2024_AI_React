type CoffeeProps = {
  coffeeName: string;
  coffeeAmount: number;
  click: () => void;
};

const Coffee = (props: CoffeeProps) => {
  return (
    <button onClick={props.click}>
      {props.coffeeName}: {props.coffeeAmount}
    </button>
  );
};

export default Coffee;
