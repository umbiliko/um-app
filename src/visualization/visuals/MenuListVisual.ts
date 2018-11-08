import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { ListVisual, ListClassKey } from '../List';

export interface MenuListVisual extends StandardVisual<ListVisual, MenuListClassKey, 'onKeyDown'> {
  onKeyDown?: React.ReactEventHandler<React.KeyboardEvent<any>>;
}

export type MenuListClassKey = ListClassKey;

declare const MenuList: React.ComponentType<MenuListProps>;

export default MenuList;
