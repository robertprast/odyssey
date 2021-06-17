import React, { FunctionComponent } from 'react'
import { 
    MenuItemLink,
    MenuItemNode,
    MenuItemSeparator 
} from '../Menu';
import className from 'classnames'

type MenuItemProps = {
    item:  MenuItemSeparator | MenuItemLink | MenuItemNode
}

const MenuItem: FunctionComponent<MenuItemProps> = ({ item }) => {
    const componentClass = className('ods-action-list-item', {
        [`is-ods-action-list-item-${item.type}`]: item.type
        // [`is-ods-action-list-item-${item.variant}`]: item.variant,
        // [`is-ods-action-list-item-prominent`]: item.prominent
    });
    const componentRole = className({
        'separator': item.type === 'separator',
        'menuitem': item.type !== 'separator'
    });

    return (
        <li className={componentClass} role={componentRole}>
            {item.type === 'link' && <a href={item.href} tabIndex={-2}>{item.label}</a>}
            {item.type === 'node' && typeof item.node === 'function' && item.node()}
        </li>
    )
}

export default MenuItem
