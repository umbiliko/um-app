import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { ListItemVisual } from './ListItemVisual';

export interface MenuItemProps extends StandardVisual<ListItemVisual, MenuItemClassKey> {
  component?: React.ReactType<MenuItemProps>;
  role?: string;
}

export type MenuItemClassKey = 'root' | 'gutters' | 'selected';

