import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { PropTypes } from '..';
import { InputBaseVisual } from './InputBase';

export interface FilledInputVisual extends StandardVisual<InputBaseVisual, FilledInputClassKey> {}

export type FilledInputClassKey =
  | 'root'
  | 'underline'
  | 'focused'
  | 'disabled'
  | 'adornedStart'
  | 'adornedEnd'
  | 'error'
  | 'multiline'
  | 'input'
  | 'inputMarginDense'
  | 'inputMultiline'
  | 'inputAdornedStart'
  | 'inputAdornedEnd';

declare const FilledInput: React.ComponentType<FilledInputProps>;

export default FilledInput;
