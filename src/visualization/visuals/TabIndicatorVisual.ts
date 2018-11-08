import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface TabIndicatorVisual
  extends StandardVisual<React.HTMLAttributes<HTMLDivElement>, TabIndicatorClassKey> {
  color: 'secondary' | 'primary' | string;
  style: { left: number; width: number };
}

export type TabIndicatorClassKey = 'root' | 'colorSecondary' | 'colorPrimary';

