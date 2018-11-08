import { HTMLAttributes, ReactNode, ReactType } from 'react';
import { StandardVisual } from './StandardVisual';
import { TypographyVisual } from './TypographyVisual';

export interface CardHeaderVisual
  extends StandardVisual<HTMLAttributes<HTMLDivElement>, CardHeaderClassKey, 'title'> {
  action?: ReactNode;
  avatar?: ReactNode;
  component?: ReactType<CardHeaderVisual>;
  disableTypography?: boolean;
  subheader?: React.ReactNode;
  subheaderTypographyProps?: Partial<TypographyVisual>;
  title?: React.ReactNode;
  titleTypographyProps?: Partial<TypographyVisual>;
}

export type CardHeaderClassKey = 'root' | 'avatar' | 'action' | 'content' | 'title' | 'subheader';

