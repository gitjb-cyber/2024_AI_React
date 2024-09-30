type FruitsProps = {
  fruitName: string;
  frutiAmount: number;
  click: () => void;
};

const Fruits = (props: FruitsProps) => {
  return (
    <button onClick={props.click}>
      {props.fruitName}: {props.frutiAmount}
    </button>
  );
};

export default Fruits;
