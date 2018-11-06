import * as React from 'react';
import { Color } from './PropTypes';
import { StandardVisual } from './StandardVisual';

export interface BadgeVisual
  extends StandardVisual<React.HTMLAttributes<HTMLDivElement>, BadgeClassKey> {
  badgeContent: React.ReactNode;
  children: React.ReactNode;
  color?: Color | 'error';
  component?: React.ReactType<BadgeVisual>;
}

export type BadgeClassKey = 'root' | 'badge' | 'colorPrimary' | 'colorSecondary';
