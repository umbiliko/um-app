import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface DividerVisual
  extends StandardVisual<React.HTMLAttributes<HTMLHRElement>, DividerClassKey> {
  absolute?: boolean;
  component?: React.ReactType<DividerVisual>;
  inset?: boolean;
  light?: boolean;
}

export type DividerClassKey = 'root' | 'absolute' | 'inset' | 'light';

