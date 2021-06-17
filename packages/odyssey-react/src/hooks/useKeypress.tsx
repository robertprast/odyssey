import { useEffect } from 'react';


type KeyPressMap = Array<[string, Function]>;

/**
 * useKeyPress
 * @param {string} key - the name of the key to respond to, compared against event.key
 * @param {function} action - the action to perform on key press
 */

const useKeypress = (keyMap: KeyPressMap, condition = true) => {
    useEffect(() => {
        const map = keyMap;
        const keyListenersMap = new Map(map);
        function keyListener(event: KeyboardEvent) {
            const listener = keyListenersMap.get(event.code);
            return (listener) && listener(event);
        }
        if (condition) {
            window.addEventListener('keyup', keyListener);
        }
        return () => window.removeEventListener('keyup', keyListener);
    }, [keyMap, condition]);
}

export default useKeypress
