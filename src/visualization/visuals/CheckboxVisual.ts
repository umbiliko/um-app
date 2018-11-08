import { ReactNode } from 'react';
import { StandardVisual } from './StandardVisual';
import { SwitchBaseVisual, SwitchBaseClassKey } from '../internal/SwitchBase';

export interface CheckboxVisual
  extends StandardVisual<SwitchBaseVisual, CheckboxClassKey, 'checkedIcon' | 'color' | 'icon'> {
  checkedIcon?: ReactNode;
  color?: 'primary' | 'secondary' | 'default';
  icon?: ReactNode;
  indeterminate?: boolean;
  indeterminateIcon?: ReactNode;
}

export type CheckboxClassKey =
  | SwitchBaseClassKey
  | 'indeterminate'
  | 'colorPrimary'
  | 'colorSecondary';

