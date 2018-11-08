import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { Orientation } from './StepperVisual';

export interface StepVisual
  extends StandardVisual<React.HTMLAttributes<HTMLDivElement>, StepClasskey> {
  active?: boolean;
  alternativeLabel?: boolean;
  children?: React.ReactNode;
  completed?: boolean;
  connector?: React.ReactElement<any>;
  disabled?: boolean;
  index?: number;
  last?: boolean;
  orientation?: Orientation;
}

export type StepClasskey = 'root' | 'horizontal' | 'vertical' | 'alternativeLabel';
