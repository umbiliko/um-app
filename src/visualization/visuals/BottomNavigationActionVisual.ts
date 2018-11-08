import { ChangeEvent, ReactElement, ReactEventHandler, ReactNode } from 'react';
import { StandardVisual } from './StandardVisual';
import { ButtonBaseVisual } from './ButtonBaseVisual';

export interface BottomNavigationActionVisual
  extends StandardVisual<ButtonBaseVisual, BottomNavigationActionClassKey, 'onChange'> {
  icon?: string | ReactElement<any>;
  label?: ReactNode;
  onChange?: (event: ChangeEvent<{}>, value: any) => void;
  onClick?: ReactEventHandler<any>;
  selected?: boolean;
  showLabel?: boolean;
  value?: any;
}

export type BottomNavigationActionClassKey = 'root' | 'selected' | 'iconOnly' | 'wrapper' | 'label';
