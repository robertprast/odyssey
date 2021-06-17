import { FunctionComponent, useState, useRef } from 'react'
import { usePopper } from 'react-popper';
import classNames from 'classnames';
import { Button, MenuItem } from '../../';
import { Props as ButtonProps } from '../Button'
import { useKeypress, useOutsideClick, useFocusTrap } from '../../hooks';
import { focusableElementsSelector } from '../../hooks/useFocusTrap';

export type Props = {
    variant: ButtonProps,
    items: MenuArray
}

type MenuItemLinkVariants = 'danger'

export interface MenuItemLink {
  type: 'link';
  href: string;
  label: string | Function;
  variant?: MenuItemLinkVariants;
  prominent?: boolean;
}

export interface MenuItemNode {
  type: 'node';
  node: any;
}

export interface MenuItemSeparator {
  type: 'separator';
}

export type MenuArray = Array<MenuItemLink | MenuItemNode | MenuItemSeparator>

const Menu: FunctionComponent<Props> = ({ children, variant, items }) => {
    const [isVisible, setIsVisible] = useState(false);
    const buttonRef: any = useRef(null);
    const menuRef: any = useRef(null);

    const { styles, attributes } = usePopper(buttonRef.current, menuRef.current, {
        placement: 'bottom-end'
    });

    const componentClass = classNames('ods-action-list', {
        "is-ods-action-list-visible": isVisible
    });

    const toggleVisibility = () => {
      setIsVisible(!isVisible)
      console.log('x')
    }

    useFocusTrap(menuRef, {
        withArrowKeys: true,
        isFocusTrapped: isVisible,
        onActivation: () => menuRef.current?.querySelectorAll(focusableElementsSelector)[0].focus(),
        onDeactivation: () => buttonRef.current.focus()
    });

    useKeypress([
        ['Escape', toggleVisibility],
        ['Tab', toggleVisibility]
    ], isVisible);
    
    useOutsideClick(menuRef, () => toggleVisibility, isVisible);

    return (
        <>
            {/* Replace custom button with Odyssey Button */}
            <Button 
                variant={variant} 
                ref={buttonRef} 
                onClick={toggleVisibility}
                ariaHasPopup={true}
                ariaExpanded={isVisible}
            >
                {children} {isVisible.toString()}
            </Button>
            <ul 
                role="menu"
                className={componentClass}
                ref={menuRef}
                style={styles.popper}
                {...attributes.popper}
            >
                {/* TODO consider making this its own component... */}
                {items.map((item, index) => (
                    <MenuItem item={item} key={index} />
                ))}
            </ul>
        </>
    )
}

export default Menu
