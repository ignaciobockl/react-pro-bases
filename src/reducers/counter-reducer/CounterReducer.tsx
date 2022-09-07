import { useReducer } from "react";

import * as actions from './actions/actions';

import { CounterState } from "./interfaces/interfaces";

import { counterReducer } from "./state/counterReducer";

const INITIAL_STATE: CounterState = {
  changes: 0,
  counter: 0,
  previous: 0,
};

const CounterReducer = () => {

  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleIncreaseBy = (value: number): void => {
    dispatch(actions.doIncreaseBy(value));
  };

  const handleReset = (): void => { dispatch(actions.doReset()) };

  return (
    <>
      <h1>CounterReducerSegmentacion</h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      <button onClick={() => handleIncreaseBy(1)}>
        +1
      </button>
      <button onClick={() => handleIncreaseBy(5)}>
        +5
      </button>
      <button onClick={() => handleIncreaseBy(10)}>
        +10
      </button>
      <button onClick={handleReset}>
        Reset
      </button>
    </>
  )
}

export default CounterReducer;
