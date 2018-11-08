import { Color } from './PropTypes';
import { StandardVisual } from './StandardVisual';
import { ButtonBaseVisual } from './ButtonBaseVisual';

export interface IconButtonProps extends StandardVisual<ButtonBaseVisual, IconButtonClassKey> {
  color?: Color;
  disabled?: boolean;
  disableRipple?: boolean;
}

export type IconButtonClassKey =
  | 'root'
  | 'colorInherit'
  | 'colorPrimary'
  | 'colorSecondary'
  | 'disabled'
  | 'label';
