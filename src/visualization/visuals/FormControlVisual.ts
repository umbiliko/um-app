import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { Margin } from './PropTypes';

export interface FormControlVisual
  extends StandardVisual<React.HtmlHTMLAttributes<HTMLDivElement>, FormControlClassKey> {
  component?: React.ReactType<FormControlVisual>;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  margin?: Margin;
  onBlur?: React.EventHandler<any>;
  onFocus?: React.EventHandler<any>;
  required?: boolean;
  variant?: 'standard' | 'outlined' | 'filled';
}

export type FormControlClassKey = 'root' | 'marginNormal' | 'marginDense' | 'fullWidth';

