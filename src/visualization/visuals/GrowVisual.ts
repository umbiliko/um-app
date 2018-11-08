import * as React from 'react';
import { Omit } from '..';
import { Theme } from '../styles/createMuiTheme';
import { TransitionVisual } from './TransitionVisual';

export interface GrowVisual extends Omit<TransitionVisual, 'timeout'> {
  theme?: Theme;
  timeout?: TransitionProps['timeout'] | 'auto';
}

declare const Grow: React.ComponentType<GrowProps>;

export default Grow;
