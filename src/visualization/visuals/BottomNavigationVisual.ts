import { ChangeEvent, HTMLAttributes, ReactNode } from 'react';
import { StandardVisual } from './StandardVisual';

export interface BottomNavigationVisual
  extends StandardVisual<
      HTMLAttributes<HTMLDivElement>,
      BottomNavigationClassKey,
      'onChange'
    > {
  children: ReactNode;
  onChange?: (event: ChangeEvent<{}>, value: any) => void;
  showLabels?: boolean;
  value?: any;
}

export type BottomNavigationClassKey = 'root';
