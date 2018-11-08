import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface StepIconVisual
  extends StandardVisual<React.HTMLAttributes<HTMLDivElement>, StepIconClasskey> {
  active?: boolean;
  completed?: boolean;
  error?: boolean;
  icon: React.ReactNode;
}

export type StepIconClasskey = 'root' | 'text' | 'active' | 'completed' | 'error';
