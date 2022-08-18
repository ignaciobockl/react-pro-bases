import { useState } from "react";

interface CounterProps {
    initialValue?: number
}

const Counter = ({ initialValue = 0 }: CounterProps) => {
  
    const [counter, setCounter] = useState<number>(initialValue);

    const handleClick = ( value: number = 5 ): void => {
        setCounter( prev => prev + value )
    }
  
    return (
    <>
        <h1>Counter: {counter}</h1>
        <button onClick={() => handleClick(1)}>
            +1
        </button>
    </>
  )
}

export default Counter;