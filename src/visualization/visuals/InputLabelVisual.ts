import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { FormLabelVisual } from './FormLabelVisual';

export interface InputLabelVisual extends StandardVisual<FormLabelVisual, InputLabelClassKey> {
  disableAnimation?: boolean;
  disabled?: boolean;
  error?: boolean;
  FormLabelClasses?: FormLabelVisual['classes'];
  focused?: boolean;
  required?: boolean;
  shrink?: boolean;
  variant?: 'standard' | 'outlined' | 'filled';
}

export type InputLabelClassKey =
  | 'root'
  | 'focused'
  | 'disabled'
  | 'error'
  | 'required'
  | 'formControl'
  | 'marginDense'
  | 'shrink'
  | 'animated'
  | 'filled'
  | 'outlined';

