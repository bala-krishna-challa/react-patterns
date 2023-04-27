import { INCREMENT, DECREMENT } from "./constants";

export interface CounterContextState {
  count: number;
  step: number;
}

export type CounterContextAction =
  | { type: typeof INCREMENT }
  | { type: typeof DECREMENT };
