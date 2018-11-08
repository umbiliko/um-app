import * as React from 'react';
import { Color } from './PropTypes';
import { StandardVisual } from './StandardVisual';

export interface SvgIconVisual
  extends StandardVisual<React.SVGProps<SVGSVGElement>, SvgIconClassKey> {
  color?: Color | 'action' | 'disabled' | 'error';
  component?: React.ReactType<SvgIconVisual>;
  fontSize?: 'inherit' | 'default' | 'small' | 'large';
  nativeColor?: string;
  shapeRendering?: string;
  titleAccess?: string;
  viewBox?: string;
}

export type SvgIconClassKey =
  | 'root'
  | 'colorSecondary'
  | 'colorAction'
  | 'colorDisabled'
  | 'colorError'
  | 'colorPrimary'
  | 'fontSizeInherit'
  | 'fontSizeSmall'
  | 'fontSizeLarge';
