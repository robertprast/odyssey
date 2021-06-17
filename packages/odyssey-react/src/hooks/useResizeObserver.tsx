import { useEffect, useRef } from 'react';

/**
 * useResizeObserver
 * @param {string} element - the name of the key to respond to, compared against event.key
 * @param {function} callback - the action to perform when resize is observed
 * @param {boolean} [condition] - A condition which if true instantiates the click event listener
 */

const useResizeObserver = (element: any, callback: ResizeObserverCallback) => {
  const current = element && element.current;

  const observer: any = useRef(null);

  useEffect(() => {
      // if we are already observing old element
      if (observer && observer.current && current) {
        observer.current.unobserve(current);
      }
      const resizeObserverOrPolyfill =  ResizeObserver;
      observer.current = new resizeObserverOrPolyfill(callback);
      observe();

      return () => {
        if (observer && observer.current && element &&
           element.current) {
          observer.current.unobserve(element.current);
        }
      };
  }, [current]);

  const observe = () => {
    if (element && element.current && observer.current) {
      observer.current.observe(element.current);
    }
  };

}

export default useResizeObserver