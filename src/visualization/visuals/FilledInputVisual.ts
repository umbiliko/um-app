import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { PropTypes } from '..';
import { InputBaseProps } from '../InputBase';

export interface FilledInputProps extends StandardProps<InputBaseProps, FilledInputClassKey> {}

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
