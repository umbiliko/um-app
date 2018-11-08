import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface GridListVisual
  extends StandardVisual<React.HTMLAttributes<HTMLUListElement>, GridListClassKey> {
  cellHeight?: number | 'auto';
  cols?: number;
  component?: React.ReactType<GridListVisual>;
  spacing?: number;
}

export type GridListClassKey = 'root';
