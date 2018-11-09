

import { ListItemVisual } from './ListItemVisual';
import { Component, Visual } from '../primitives/index';

export interface MenuItemVisual extends Component<ListItemVisual, MenuItemClassKey> {
  component?: MenuItemVisual['type'];
  role?: string;
}

export type MenuItemClassKey = 'root' | 'gutters' | 'selected';

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}
