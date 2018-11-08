import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface FormControlLabelVisual
  extends StandardVisual<
      React.LabelHTMLAttributes<HTMLLabelElement>,
      FormControlLabelClassKey,
      'onChange'
    > {
  checked?: boolean | string;
  control: React.ReactElement<any>;
  disabled?: boolean;
  inputRef?: React.Ref<any>;
  label: React.ReactNode;
  name?: string;
  onChange?: (event: React.ChangeEvent<{}>, checked: boolean) => void;
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
  value?: string;
}

export type FormControlLabelClassKey = 'root' | 'start' | 'disabled' | 'label';

