import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { Orientation } from '../Stepper';
import { ButtonBaseVisual } from './ButtonBase';

export type StepButtonIcon = React.ReactElement<any> | string | number | null;

export interface StepButtonVisual extends StandardVisual<ButtonBaseVisual, StepButtonClasskey> {
  active?: boolean;
  alternativeLabel?: boolean;
  completed?: boolean;
  disabled?: boolean;
  icon?: StepButtonIcon;
  last?: boolean;
  optional?: React.ReactNode;
  orientation?: Orientation;
}

export type StepButtonClasskey = 'root' | 'vertical' | 'touchRipple';

declare const StepButton: React.ComponentType<StepButtonProps>;

export default StepButton;
