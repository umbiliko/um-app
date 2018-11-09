

import { ListVisual, ListClassKey } from '../List';
import { Component, Visual } from '../primitives/index';

export interface MenuListVisual extends Component<ListVisual, MenuListClassKey, 'onKeyDown'> {
  onKeyDown?: React.ReactEventHandler<React.KeyboardEvent<any>>;
}

export type MenuListClassKey = ListClassKey;

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}