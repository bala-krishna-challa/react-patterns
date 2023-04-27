import Counter from "./Counter";
import { CounterProvider } from "./CounterProvider";

function ContextPattern() {
  return (
    <CounterProvider initialValue={4} step={5}>
      <Counter />
    </CounterProvider>
  );
}

export default ContextPattern;
