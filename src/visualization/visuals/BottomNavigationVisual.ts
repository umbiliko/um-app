import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface BottomNavigationVisual
  extends StandardVisual<
      React.HTMLAttributes<HTMLDivElement>,
      BottomNavigationClassKey,
      'onChange'
    > {
  children: React.ReactNode;
  onChange?: (event: React.ChangeEvent<{}>, value: any) => void;
  showLabels?: boolean;
  value?: any;
}

export type BottomNavigationClassKey = 'root';
