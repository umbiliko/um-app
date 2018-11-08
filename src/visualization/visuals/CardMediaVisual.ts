import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface CardMediaVisual
  extends StandardVisual<React.HTMLAttributes<HTMLDivElement>, CardMediaClassKey> {
  component?: React.ReactType<CardMediaVisual>;
  image?: string;
  src?: string;
}

export type CardMediaClassKey = 'root' | 'media';
