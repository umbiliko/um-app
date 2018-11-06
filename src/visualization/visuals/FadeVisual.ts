import { Theme } from './Theme';
import { TransitionVisual } from './TransitionVisual';

export interface FadeVisual extends TransitionVisual {
  theme?: Theme;
}