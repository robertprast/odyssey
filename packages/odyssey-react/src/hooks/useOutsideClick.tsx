import { useEffect } from 'react';

/**
 * useOutsideClick
 * @param {string} ref - the name of the key to respond to, compared against event.key
 * @param {function} callback - the action to perform on key press
 * @param {boolean} [condition] - A condition which if true instantiates the click event listener
 */

const useOutsideClick = (ref: any, callback: Function, condition = true) => {
    const handleClick = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target)) {
            callback(event);
        }
    };

    useEffect(() => {
        if (condition) {
            document.addEventListener("click", handleClick);
        }

        return () => {
            document.removeEventListener("click", handleClick);
        };
    });    
}

export default useOutsideClick
