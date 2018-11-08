import * as React from 'react';
import { Color } from './PropTypes';
import { StandardVisual } from './StandardVisual';

export interface IconVisual
  extends StandardVisual<React.HTMLAttributes<HTMLSpanElement>, IconClassKey> {
  color?: Color | 'action' | 'disabled' | 'error';
  component?: React.ReactType<IconVisual>;
  fontSize?: 'inherit' | 'default' | 'small' | 'large';
}

export type IconClassKey =
  | 'root'
  | 'colorSecondary'
  | 'colorAction'
  | 'colorDisabled'
  | 'colorError'
  | 'colorPrimary'
  | 'fontSizeInherit'
  | 'fontSizeSmall'
  | 'fontSizeLarge';

