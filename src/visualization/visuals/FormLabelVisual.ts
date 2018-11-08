import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface FormLabelVisual extends StandardVisual<FormLabelBaseVisual, FormLabelClassKey> {
  component?: React.ReactType<FormLabelBaseProps>;
  disabled?: boolean;
  error?: boolean;
  filled?: boolean;
  focused?: boolean;
  required?: boolean;
}

export type FormLabelBaseProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export type FormLabelClassKey =
  | 'root'
  | 'focused'
  | 'disabled'
  | 'error'
  | 'filled'
  | 'required'
  | 'asterisk';

