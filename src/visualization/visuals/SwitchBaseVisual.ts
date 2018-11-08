import { ChangeEvent, InputHTMLAttributes, ReactNode, Ref } from 'react';
import { StandardVisual } from './StandardVisual';
import { IconButtonProps } from './IconButtonVisual';

export interface SwitchBaseVisual
  extends StandardVisual<IconButtonProps, SwitchBaseClassKey, 'onChange' | 'value'> {
  autoFocus?: boolean;
  checked?: boolean | string;
  checkedIcon: ReactNode;
  defaultChecked?: boolean;
  disabled?: boolean;
  disableRipple?: boolean;
  icon: ReactNode;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  inputRef?: Ref<any>;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  readOnly?: boolean;
  required?: boolean;
  tabIndex?: number;
  value?: string | number | boolean;
}

export type SwitchBaseClassKey = 'root' | 'checked' | 'disabled' | 'input';
