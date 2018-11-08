import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface ListVisual
  extends StandardVisual<React.HTMLAttributes<HTMLUListElement>, ListClassKey> {
  component?: React.ReactType<ListVisual>;
  dense?: boolean;
  disablePadding?: boolean;
  subheader?: React.ReactElement<any>;
}

export type ListClassKey = 'root' | 'padding' | 'dense' | 'subheader';
