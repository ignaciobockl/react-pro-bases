import { useState } from "react";

interface CounterProps {
    initialValue?: number
}

interface CounterState {
    counter: number;
    clicks: number;
}

const CounterBy = ({ initialValue = 5 }: CounterProps) => {
  
    const [{ counter, clicks }, setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0,
    });
    // const [counterState, setCounterState] = useState<CounterState>({
    //     counter: initialValue,
    //     clicks: 0,
    // });

    const handleClick = ( value: number ): void => {
        setCounterState( ({ counter, clicks }) => ({
            counter: counter + value,
            clicks: clicks + 1,
        }))
    }
    // const handleClick = ( value: number ): void => {
    //     setCounterState( prev => ({
    //         counter: prev.counter + value,
    //         clicks: prev.clicks + 1,
    //     }))
    // }
  
    return (
    <>
        <h1>CounterBy: {counter}</h1>
        <h1>Clicks: {clicks}</h1>

        <button onClick={() => handleClick(1)}> +1 </button>
        <button onClick={() => handleClick(5)}> +5 </button>
    </>
  )
}

export default CounterBy;