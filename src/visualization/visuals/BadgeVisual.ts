import { HTMLAttributes, ReactNode, ReactType } from 'react';
import { Color } from './PropTypes';
import { StandardVisual } from './StandardVisual';

export interface BadgeVisual
  extends StandardVisual<HTMLAttributes<HTMLDivElement>, BadgeClassKey> {
  badgeContent: ReactNode;
  children: ReactNode;
  color?: Color | 'error';
  component?: ReactType<BadgeVisual>;
}

export type BadgeClassKey = 'root' | 'badge' | 'colorPrimary' | 'colorSecondary';
