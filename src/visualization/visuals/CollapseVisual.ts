import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { Theme } from '../styles/createMuiTheme';
import { TransitionProps } from '../transitions/transition';

export interface CollapseProps extends StandardVisual<TransitionProps, CollapseClassKey, 'timeout'> {
  children?: React.ReactNode;
  collapsedHeight?: string;
  component?: React.ReactType<CollapseProps>;
  theme?: Theme;
  timeout?: TransitionProps['timeout'] | 'auto';
}

export type CollapseClassKey = 'container' | 'entered' | 'wrapper' | 'wrapperInner';

declare const Collapse: React.ComponentType<CollapseProps>;

export default Collapse;
