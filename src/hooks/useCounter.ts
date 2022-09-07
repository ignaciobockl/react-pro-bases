import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';

interface CounterProps {
    initialValue: number;
    MAXIMUN_COUNT: number;
}

export const useCounter = ({
    initialValue,
    MAXIMUN_COUNT
}: CounterProps) => {

    const [counter, setCounter] = useState<number>(initialValue);

    const elementToAnimate = useRef<any>(null);
    const tl = useRef(gsap.timeline());

    const handleClick = (): void => {
        setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT));
    }

    useLayoutEffect(() => {

        if (!elementToAnimate.current) return;

        tl.current.to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' })
            .to(elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' })
            .pause();

    }, []);

    useEffect(() => {
        // if (counter > MAXIMUN_COUNT) return;
        tl.current.play(0);
    }, [counter]);


    return {
        counter,
        elementToAnimate,
        handleClick,
    }

};
