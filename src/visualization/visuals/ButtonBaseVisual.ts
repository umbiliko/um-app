import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { TouchRippleProps } from '../material-ui/TouchRipple';

export interface ButtonBaseVisual
  extends StandardVisual<
      React.AnchorHTMLAttributes<HTMLElement> & React.ButtonHTMLAttributes<HTMLElement>,
      ButtonBaseClassKey
    > {
  action?: (actions: ButtonBaseActions) => void;
  buttonRef?: React.Ref<any> | React.RefObject<any>;
  centerRipple?: boolean;
  component?: React.ReactType<ButtonBaseVisual>;
  disableRipple?: boolean;
  disableTouchRipple?: boolean;
  focusRipple?: boolean;
  focusVisibleClassName?: string;
  onFocusVisible?: React.FocusEventHandler<any>;
  TouchRippleProps?: Partial<TouchRippleProps>;
}

export type ButtonBaseClassKey = 'root' | 'disabled' | 'focusVisible';

export interface ButtonBaseActions {
  focusVisible(): void;
}
