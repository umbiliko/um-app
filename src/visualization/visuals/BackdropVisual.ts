import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { FadeVisual } from './FadeVisual';
import { TransitionVisual } from './TransitionVisual';

export interface BackdropVisual
  extends StandardVisual<
      React.HTMLAttributes<HTMLDivElement> & Partial<FadeVisual>,
      BackdropClassKey
    > {
  invisible?: boolean;
  onClick?: React.ReactEventHandler<{}>;
  open: boolean;
  transitionDuration?: TransitionVisual['timeout'];
}

export type BackdropClassKey = 'root' | 'invisible';