import { useCounter } from "../hooks/useCounter";

const CounterHook = () => {

    const { counter, elementToAnimate, handleClick } 
        = useCounter({ initialValue: 2, MAXIMUN_COUNT: 15 });

    return (
        <>
            <h1>CounterHook:</h1>
            <h2 ref={elementToAnimate}>{counter}</h2>

            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}

export default CounterHook;