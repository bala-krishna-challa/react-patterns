import { useCounter, increment, decrement } from "./CounterProvider";

const Counter = () => {
  const [state, dispatch] = useCounter();
  return (
    <>
      {state.count}
      <button onClick={() => increment(dispatch)}>Increase</button>
      <button onClick={() => decrement(dispatch)}>Decrease</button>
    </>
  );
};

export default Counter;
