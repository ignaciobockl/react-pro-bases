import { useReducer } from "react";

interface CounterState {
    changes: number;
    counter: number;
    previous: number;
}

const INITIAL_STATE: CounterState = {
    changes: 0,
    counter: 0,
    previous: 0,
};

type CounterAction =
    | { type: 'incrementBy', payload: { value: number } }
    | { type: 'reset' }

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
        case 'incrementBy':
            return {
                ...state,
                changes: state.changes + 1,
                counter: state.counter + action.payload.value,
                previous: state.counter
            }    

        case "reset":
            return {
                changes: 0,
                counter: 0,
                previous: 0,
            }

        default:
            return state;
    }
};

const CounterReducerComponent = () => {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleIncreaseBy = (value: number): void => {
        dispatch({type: 'incrementBy', payload: { value } })
    };

    const handleReset = (): void => {
        dispatch({ type: 'reset' });
    };

    return (
        <>
            <h1>CounterReducerComponent</h1>
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

export default CounterReducerComponent;