import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { Orientation } from './StepperVisual';
import { StepButtonIcon } from './StepButtonVisual';
import { StepIconVisual } from './StepIconVisual';

export interface StepLabelVisual
  extends StandardVisual<React.HTMLAttributes<HTMLDivElement>, StepLabelClasskey> {
  active?: boolean;
  alternativeLabel?: boolean;
  children: React.ReactNode;
  completed?: boolean;
  disabled?: boolean;
  error?: boolean;
  icon?: StepButtonIcon;
  last?: boolean;
  optional?: React.ReactNode;
  orientation?: Orientation;
  StepIconComponent?: React.ReactType;
  StepIconProps?: Partial<StepIconVisual>;
}

export type StepLabelClasskey =
  | 'root'
  | 'horizontal'
  | 'vertical'
  | 'active'
  | 'completed'
  | 'alternativeLabel'
  | 'error'
  | 'disabled'
  | 'label'
  | 'iconContainer'
  | 'labelContainer';

