import { Color } from './PropTypes';
import { StandardVisual } from './StandardVisual';
import { PaperVisual } from './PaperVisual';

export interface AppBarVisual extends StandardVisual<PaperVisual, AppBarClassKey> {
  color?: Color;
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
}

export type AppBarClassKey =
  | 'root'
  | 'positionFixed'
  | 'positionAbsolute'
  | 'positionSticky'
  | 'positionStatic'
  | 'positionRelative'
  | 'colorDefault'
  | 'colorPrimary'
  | 'colorSecondary';
