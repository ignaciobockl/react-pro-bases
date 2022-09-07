export type CounterAction =
| { type: 'incrementBy', payload: { value: number } }
| { type: 'reset' };