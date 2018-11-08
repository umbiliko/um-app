import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { TypographyVisual } from './TypographyVisual';

export interface ListItemTextVisual
  extends StandardVisual<React.HTMLAttributes<HTMLDivElement>, ListItemTextClassKey> {
  disableTypography?: boolean;
  inset?: boolean;
  primary?: React.ReactNode;
  primaryTypographyProps?: Partial<TypographyVisual>;
  secondary?: React.ReactNode;
  secondaryTypographyProps?: Partial<TypographyVisual>;
}

export type ListItemTextClassKey =
  | 'root'
  | 'inset'
  | 'dense'
  | 'primary'
  | 'secondary'
  | 'textDense';

declare const ListItemText: React.ComponentType<ListItemTextVisual>;

export default ListItemText;
