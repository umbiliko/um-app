import { HTMLAttributes, ReactType } from 'react';
import { StandardVisual } from './StandardVisual';

export interface CardContentVisual
  extends StandardVisual<HTMLAttributes<HTMLDivElement>, CardContentClassKey> {
  component?: ReactType<CardContentVisual>;
}

export type CardContentClassKey = 'root';
