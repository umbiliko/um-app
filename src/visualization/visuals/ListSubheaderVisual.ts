import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface ListSubheaderVisual
  extends StandardVisual<React.HTMLAttributes<HTMLDivElement>, ListSubheaderClassKey> {
  color?: 'default' | 'primary' | 'inherit';
  component?: React.ReactType<ListSubheaderVisual>;
  disableGutters?: boolean;
  disableSticky?: boolean;
  inset?: boolean;
}

export type ListSubheaderClassKey =
  | 'root'
  | 'colorPrimary'
  | 'colorInherit'
  | 'inset'
  | 'sticky'
  | 'gutters';

