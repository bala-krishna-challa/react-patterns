import { Dispatch, createContext, useContext, useReducer } from "react";
import { CounterContextAction, CounterContextState } from "./types";
import { INCREMENT, DECREMENT } from "./constants";

const defaultValue: CounterContextState = { count: 0, step: 1 };

const reducer = (
  state: CounterContextState,
  action: CounterContextAction
): CounterContextState => {
  const { type } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + state.step };
    case DECREMENT:
      return { ...state, count: state.count - state.step };
    default:
      throw new Error(`Unhandler action type: ${type}`);
  }
};

const CounterContext = createContext<
  [CounterContextState, React.Dispatch<CounterContextAction>]
>([defaultValue, () => {}]);
CounterContext.displayName = "CounterContext";

const CounterProvider = ({ step = 1, initialValue = 0, ...props }) => {
  const [state, dispatch] = useReducer(reducer, { count: initialValue, step });

  return <CounterContext.Provider value={[state, dispatch]} {...props} />;
};

const useCounter = () => {
  const context = useContext(CounterContext);

  if (context === undefined) {
    throw new Error("useCounter should be used inside CounterProvider");
  }

  return context;
};

const increment = (dispatch: Dispatch<CounterContextAction>) =>
  dispatch({ type: INCREMENT });
const decrement = (dispatch: Dispatch<CounterContextAction>) =>
  dispatch({ type: DECREMENT });

export { useCounter, CounterProvider, increment, decrement };
