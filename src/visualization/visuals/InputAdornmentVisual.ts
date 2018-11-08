import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface InputAdornmentVisual
  extends StandardVisual<React.HTMLAttributes<HTMLDivElement>, InputAdornmentClassKey> {
  component?: React.ReactType<InputAdornmentVisual>;
  disableTypography?: boolean;
  position: 'start' | 'end';
  variant?: 'standard' | 'outlined' | 'filled';
}

export type InputAdornmentClassKey = 'root' | 'positionStart' | 'positionEnd' | 'filled';

