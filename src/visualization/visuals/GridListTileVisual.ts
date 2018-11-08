import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface GridListTileProps
  extends StandardProps<React.HTMLAttributes<HTMLLIElement>, GridListTileClassKey> {
  cols?: number;
  component?: React.ReactType<GridListTileProps>;
  rows?: number;
}

export type GridListTileClassKey = 'root' | 'tile' | 'imgFullHeight' | 'imgFullWidth';

