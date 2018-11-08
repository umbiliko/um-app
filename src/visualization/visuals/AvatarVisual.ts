import { HTMLAttributes, HtmlHTMLAttributes, ReactType } from 'react';
import { StandardVisual } from './StandardVisual';

export interface AvatarVisual extends StandardVisual<HTMLAttributes<HTMLDivElement>, AvatarClassKey> {
  alt?: string;
  childrenClassName?: string;
  component?: ReactType<AvatarVisual>;
  imgProps?: HtmlHTMLAttributes<HTMLImageElement>;
  sizes?: string;
  src?: string;
  srcSet?: string;
}

export type AvatarClassKey = 'root' | 'colorDefault' | 'img';
