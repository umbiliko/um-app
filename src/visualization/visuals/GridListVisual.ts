import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface GridListProps
  extends StandardProps<React.HTMLAttributes<HTMLUListElement>, GridListClassKey> {
  cellHeight?: number | 'auto';
  cols?: number;
  component?: React.ReactType<GridListProps>;
  spacing?: number;
}

export type GridListClassKey = 'root';

