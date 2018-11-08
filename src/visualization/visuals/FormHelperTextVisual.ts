import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface FormHelperTextVisual
  extends StandardVisual<React.HTMLAttributes<HTMLParagraphElement>, FormHelperTextClassKey> {
  disabled?: boolean;
  error?: boolean;
  filled?: boolean;
  focused?: boolean;
  component?: React.ReactType<FormHelperTextVisual>;
  margin?: 'dense';
  required?: boolean;
  variant?: 'standard' | 'outlined' | 'filled';
}

export type FormHelperTextClassKey =
  | 'root'
  | 'error'
  | 'disabled'
  | 'marginDense'
  | 'focused'
  | 'filled'
  | 'contained'
  | 'required';

