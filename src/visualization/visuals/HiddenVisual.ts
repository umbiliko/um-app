import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { Breakpoint } from '../styles/createBreakpoints';

export interface HiddenVisual extends StandardVisual<{}, never> {
  implementation?: 'js' | 'css';
  initialWidth?: Breakpoint;
  lgDown?: boolean;
  lgUp?: boolean;
  mdDown?: boolean;
  mdUp?: boolean;
  only?: Breakpoint | Breakpoint[];
  smDown?: boolean;
  smUp?: boolean;
  xlDown?: boolean;
  xlUp?: boolean;
  xsDown?: boolean;
  xsUp?: boolean;
}

declare const Hidden: React.ComponentType<HiddenProps>;

export default Hidden;
