import * as React from 'react';
import { Theme } from '../styles/createMuiTheme';
import { TransitionVisual } from './TransitionVisual';

export interface SlideVisual extends TransitionProps {
  direction: 'left' | 'right' | 'up' | 'down';
  theme?: Theme;
}

declare const Slide: React.ComponentType<SlideProps>;

export default Slide;
