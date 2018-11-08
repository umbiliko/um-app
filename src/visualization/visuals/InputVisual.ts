import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { InputBaseVisual } from './InputBaseVisual';

export interface InputVisual extends StandardVisual<InputBaseVisual, InputClassKey> {}

export type InputClassKey =
  | 'root'
  | 'formControl'
  | 'focused'
  | 'disabled'
  | 'underline'
  | 'error'
  | 'multiline'
  | 'fullWidth'
  | 'input'
  | 'inputMarginDense'
  | 'inputMultiline'
  | 'inputType'
  | 'inputTypeSearch';

declare const Input: React.ComponentType<InputVisual>;

export default Input;
