import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { ButtonBaseVisual } from './ButtonBaseVisual';

export interface ListItemVisual
  extends StandardVisual<
      ButtonBaseVisual & React.LiHTMLAttributes<HTMLElement>,
      ListItemClassKey,
      'component'
    > {
  button?: boolean;
  component?: React.ReactType<ListItemVisual>;
  ContainerComponent?: React.ReactType<React.HTMLAttributes<HTMLDivElement>>;
  ContainerProps?: React.HTMLAttributes<HTMLDivElement>;
  dense?: boolean;
  disabled?: boolean;
  disableGutters?: boolean;
  divider?: boolean;
  focusVisibleClassName?: string;
  selected?: boolean;
}

export type ListItemClassKey =
  | 'root'
  | 'container'
  | 'focusVisible'
  | 'default'
  | 'dense'
  | 'disabled'
  | 'divider'
  | 'gutters'
  | 'button'
  | 'secondaryAction'
  | 'selected';
