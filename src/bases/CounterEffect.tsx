import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

const MAXIMUN_COUNT = 10;

interface CounterProps {
    initialValue?: number
}

const CounterEffect = ({ initialValue = 5 }: CounterProps) => {
  
    const [counter, setCounter] = useState<number>(initialValue);

    /*
        useRef a diferencia del useState cuando se actualice el counterElement no va a
        disparar un re renderizado del componente, es decir, no se va a volver a construir
        el componente
    */
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = ( value: number ): void => {
        counter < MAXIMUN_COUNT && setCounter( prev => prev + value );
        // setCounter( prev => Math.min(prev + 1, MAXIMUN_COUNT)); // otra forma de hacerlo
    }

    /* 
        Cuando se quiere trabajar con referencias HTML es conveniente trabajar con el UseLayoutEffect,
        tiene la misma firma de useEffect, solo que realiza el efecto despues de que se construyó el HTML.
    */
    useLayoutEffect(() => {
      
        (counter >= 10) && 
            gsap.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
                .then(() => {
                    gsap.to(counterElement.current, { y: 10, duration: 1, ease: 'bounce.out' })
                });

    }, [counter]);
    
  
    return (
    <>
        <h1>CounterEffect:</h1>
        <h2 ref={counterElement}>{counter}</h2>

        <button onClick={() => handleClick(1)}>
            +1
        </button>
    </>
  )
}

export default CounterEffect;