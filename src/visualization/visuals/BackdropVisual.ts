import { HTMLAttributes, ReactEventHandler } from 'react';
import { StandardVisual } from './StandardVisual';
import { FadeVisual } from './FadeVisual';
import { TransitionVisual } from './TransitionVisual';

export interface BackdropVisual
  extends StandardVisual<
      HTMLAttributes<HTMLDivElement> & Partial<FadeVisual>,
      BackdropClassKey
    > {
  invisible?: boolean;
  onClick?: ReactEventHandler<{}>;
  open: boolean;
  transitionDuration?: TransitionVisual['timeout'];
}

export type BackdropClassKey = 'root' | 'invisible';