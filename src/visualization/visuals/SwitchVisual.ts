import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { SwitchBaseVisual, SwitchBaseClassKey } from './SwitchBaseVisual';

export interface SwitchVisual
  extends StandardVisual<SwitchBaseVisual, SwitchClassKey, 'checkedIcon' | 'color' | 'icon'> {
  checkedIcon?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'default';
  icon?: React.ReactNode;
}

export type SwitchClassKey =
  | SwitchBaseClassKey
  | 'bar'
  | 'icon'
  | 'iconChecked'
  | 'switchBase'
  | 'colorPrimary'
  | 'colorSecondary';
