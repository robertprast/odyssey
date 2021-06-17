import { useEffect } from "react";

import { useFirstRender } from "./";

export const focusableElementsSelector = `
a[href],
button,
textarea,
input[type="text"],
input[type="radio"],
input[type="checkbox"],
select
`

type focusTrapOptions = {
    withArrowKeys?: boolean,
    isFocusTrapped?: boolean,
    onActivation?: Function,
    onDeactivation?: Function
}

const useFocusTrap = (ref: any, options: focusTrapOptions) => {
    const { isFocusTrapped, withArrowKeys, onActivation, onDeactivation } = options;
    const element = ref.current;

    const handleTabFocus = (event: any) => {
        const focusableElements = element?.querySelectorAll(focusableElementsSelector);
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (focusableElements && isFocusTrapped) {
            if (!event.shiftKey && document.activeElement === lastElement) { 
                firstElement.focus();
                event.preventDefault();
            }
            if (event.shiftKey && document.activeElement === firstElement) {
                lastElement.focus();
                event.preventDefault();
            }
        }
    };

    const handleArrowFocus = (event: any) => {
        const focusableElements = element.querySelectorAll(focusableElementsSelector);
        const currentFocused = Array.from(focusableElements).indexOf(document.activeElement)
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (isFocusTrapped) {
            if (event.key === 'Tab') {
                event.preventDefault();
            }

            if (event.key === 'ArrowUp' && document.activeElement === firstElement) {
                lastElement.focus();
                event.preventDefault();
            }
            else if (event.key === 'ArrowUp') {
                focusableElements[currentFocused - 1].focus()
                event.preventDefault()
            }
            
            if (event.key === 'ArrowDown' && document.activeElement === lastElement) { 
                firstElement.focus();
                event.preventDefault();
            }
            else if (event.key === 'ArrowDown') {
                focusableElements[currentFocused+1].focus()
                event.preventDefault()
            }
        }
    }

    const firstRender = useFirstRender();

    useEffect(() => {
        const keyListenersMap = new Map([
            ["Tab", !withArrowKeys ? handleTabFocus : handleArrowFocus],
            ["ArrowDown", withArrowKeys && handleArrowFocus],
            ["ArrowUp", withArrowKeys && handleArrowFocus],
        ]);

        const keyListener = (event: KeyboardEvent) => {
            const listener = keyListenersMap.get(event.code);
            return (listener) && listener(event);
        }

        if (!firstRender && isFocusTrapped && onActivation) {
            onActivation();
        }

        if (!firstRender && !isFocusTrapped && onDeactivation) {
            onDeactivation();
        }

        if (isFocusTrapped) {
            element?.addEventListener("keydown", keyListener);
        }

        return () => element?.removeEventListener("keydown", keyListener);
    });

}

export default useFocusTrap;