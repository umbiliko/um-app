import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { Orientation } from './StepperVisual';

export type StepConnectorIcon = React.ReactElement<any> | string | number;

export interface StepConnectorVisual
  extends StandardVisual<React.HTMLAttributes<HTMLDivElement>, StepConnectorClasskey> {
  active?: boolean;
  alternativeLabel?: boolean;
  completed?: boolean;
  disabled?: boolean;
  index?: number;
  orientation?: Orientation;
}

export type StepConnectorClasskey =
  | 'root'
  | 'horizontal'
  | 'vertical'
  | 'alternativeLabel'
  | 'active'
  | 'completed'
  | 'disabled'
  | 'line'
  | 'lineHorizontal'
  | 'lineVertical';
