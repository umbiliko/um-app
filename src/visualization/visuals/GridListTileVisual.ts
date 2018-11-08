import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface GridListTileVisual
  extends StandardVisual<React.HTMLAttributes<HTMLLIElement>, GridListTileClassKey> {
  cols?: number;
  component?: React.ReactType<GridListTileVisual>;
  rows?: number;
}

export type GridListTileClassKey = 'root' | 'tile' | 'imgFullHeight' | 'imgFullWidth';

