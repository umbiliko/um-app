import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { PaperVisual } from './Paper';

export type Orientation = 'horizontal' | 'vertical';

export interface StepperVisual extends StandardVisual<PaperVisual, StepperClasskey> {
  activeStep?: number;
  alternativeLabel?: boolean;
  children: React.ReactNode;
  connector?: React.ReactElement<any> | React.ReactNode;
  nonLinear?: boolean;
  orientation?: Orientation;
}

export type StepperClasskey = 'root' | 'horizontal' | 'vertical' | 'alternativeLabel';

declare const Stepper: React.ComponentType<StepperProps>;

export default Stepper;
