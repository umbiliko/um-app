import { Theme } from './Theme';
import { TransitionVisual } from './TransitionVisual';

export interface ZoomVisual extends TransitionVisual {
  theme?: Theme;
}