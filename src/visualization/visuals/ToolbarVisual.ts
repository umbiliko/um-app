import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface ToolbarVisual
  extends StandardVisual<React.HTMLAttributes<HTMLDivElement>, ToolbarClassKey> {
  variant?: 'regular' | 'dense';
  disableGutters?: boolean;
}

export type ToolbarClassKey = 'root' | 'gutters' | 'regular' | 'dense';
