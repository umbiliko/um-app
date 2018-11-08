import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { Orientation } from './StepperVisual';
import { TransitionVisual } from './TransitionVisual';

export interface StepContentVisual
  extends StandardVisual<React.HTMLAttributes<HTMLDivElement>, StepContentClasskey> {
  active?: boolean;
  alternativeLabel?: boolean;
  children: React.ReactNode;
  completed?: boolean;
  last?: boolean;
  optional?: boolean;
  orientation?: Orientation;
  TransitionComponent?: React.ComponentType<TransitionVisual>;
  transitionDuration?: TransitionVisual['timeout'] | 'auto';
  TransitionProps?: TransitionVisual;
}

export type StepContentClasskey = 'root' | 'last' | 'transition';
