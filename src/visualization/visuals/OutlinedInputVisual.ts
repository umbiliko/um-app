import * as React from 'react';
import { StandardVisual, PropTypes } from '..';
import { InputBaseVisual } from './InputBase';

export interface OutlinedInputVisual extends StandardVisual<InputBaseVisual, OutlinedInputClassKey> {
  notched?: boolean;
  labelWidth: number;
}

export type OutlinedInputClassKey =
  | 'root'
  | 'focused'
  | 'disabled'
  | 'adornedStart'
  | 'adornedEnd'
  | 'error'
  | 'multiline'
  | 'notchedOutline'
  | 'input'
  | 'inputMarginDense'
  | 'inputMultiline'
  | 'inputAdornedStart'
  | 'inputAdornedEnd';

declare const OutlinedInput: React.ComponentType<OutlinedInputProps>;

export default OutlinedInput;
