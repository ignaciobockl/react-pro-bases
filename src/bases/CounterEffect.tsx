import { useEffect, useState } from "react";
import { gsap } from 'gsap';

const MAXIMUN_COUNT = 10;

interface CounterProps {
    initialValue?: number
}

const CounterEffect = ({ initialValue = 5 }: CounterProps) => {
  
    const [counter, setCounter] = useState<number>(initialValue);

    const handleClick = ( value: number ): void => {
        counter < MAXIMUN_COUNT && setCounter( prev => prev + value );
        // setCounter( prev => Math.min(prev + 1, MAXIMUN_COUNT)); // otra forma de hacerlo
    }

    useEffect(() => {
      
        (counter >= 10) && 
            gsap.to('h2', { y: -10, duration: 0.2, ease: 'ease.out' })
                .then(() => {
                    gsap.to('h2', { y: 10, duration: 1, ease: 'bounce.out' })
                });

    }, [counter]);
    
  
    return (
    <>
        <h1>CounterEffect:</h1>
        <h2>{counter}</h2>

        <button onClick={() => handleClick(1)}>
            +1
        </button>
    </>
  )
}

export default CounterEffect;