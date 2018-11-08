import { ReactNode } from 'react';
import { StandardVisual } from './StandardVisual';
import { SwitchBaseProps, SwitchBaseClassKey } from '../internal/SwitchBase';

export interface CheckboxVisual
  extends StandardVisual<SwitchBaseProps, CheckboxClassKey, 'checkedIcon' | 'color' | 'icon'> {
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

