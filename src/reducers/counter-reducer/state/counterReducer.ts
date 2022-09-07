import { CounterAction } from "../actions/action";
import { CounterState } from "../interfaces/interface";

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
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