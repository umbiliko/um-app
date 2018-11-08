import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { SwitchBaseVisual, SwitchBaseClassKey } from './SwitchBaseVisual';

export interface RadioVisual
  extends StandardVisual<SwitchBaseVisual, RadioClassKey, 'checkedIcon' | 'color' | 'icon'> {
  checkedIcon?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'default';
  icon?: React.ReactNode;
}

export type RadioClassKey = SwitchBaseClassKey | 'colorPrimary' | 'colorSecondary';
