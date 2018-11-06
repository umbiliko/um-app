import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface AvatarVisual extends StandardVisual<React.HTMLAttributes<HTMLDivElement>, AvatarClassKey> {
  alt?: string;
  childrenClassName?: string;
  component?: React.ReactType<AvatarVisual>;
  imgProps?: React.HtmlHTMLAttributes<HTMLImageElement>;
  sizes?: string;
  src?: string;
  srcSet?: string;
}

export type AvatarClassKey = 'root' | 'colorDefault' | 'img';
