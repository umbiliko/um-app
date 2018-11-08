import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { PaperVisual } from './Paper';
import { ButtonVisual } from './Button';
import { LinearProgressVisual } from './LinearProgress';

export interface MobileStepperVisual extends StandardVisual<PaperVisual, MobileStepperClassKey> {
  activeStep?: number;
  backButton: React.ReactElement<any>;
  LinearProgressProps?: Partial<LinearProgressProps>;
  nextButton: React.ReactElement<any>;
  position?: 'bottom' | 'top' | 'static';
  steps: number;
  variant?: 'text' | 'dots' | 'progress';
}

export type MobileStepperClassKey =
  | 'root'
  | 'positionBottom'
  | 'positionTop'
  | 'positionStatic'
  | 'dots'
  | 'dot'
  | 'dotActive'
  | 'progress';

declare const MobileStepper: React.ComponentType<MobileStepperProps>;

export default MobileStepper;
