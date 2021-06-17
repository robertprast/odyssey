/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';

/**
 * useIntersectionObserver
 * @param {string} element - the name of the key to respond to, compared against event.key
 * @param {function} callback - the action to perform when resize is observed
 * @param {boolean} [condition] - A condition which if true instantiates the click event listener
 */

const useIntersectionObserver = (element: any, callback: IntersectionObserverCallback, options: any) => {
    const current = element && element.current;
    const observer: any = useRef(null);

    useEffect(() => {
        if (observer && observer.current === null) {
            observer.current = new IntersectionObserver(callback, options);
            observer.current.observe(element.current);
        }
        if (observer.current) {
        }

        return () => {
            if (observer && observer.current && element && element.current) {
                observer.current.unobserve(element.current);
            }
        };
  }, [current, observer]);
}

export default useIntersectionObserver