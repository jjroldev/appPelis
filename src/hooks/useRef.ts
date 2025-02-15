import { useEffect, useRef, useState } from 'react';

export function useRefVisible(callback: () => void) {
    const observerRef = useRef<HTMLDivElement | null>(null);
    const [hasTriggered, setHasTriggered] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasTriggered) {
                    setHasTriggered(true);
                    callback();
                    setTimeout(() => setHasTriggered(false), 500);
                }
            },
            { threshold: 0.2 }
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, [callback, hasTriggered]);

    return observerRef;
}
