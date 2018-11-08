import { HTMLAttributes } from 'react';
import { StandardVisual } from './StandardVisual';

export interface CardActionsVisual
  extends StandardVisual<HTMLAttributes<HTMLDivElement>, CardActionsClassKey> {
  disableActionSpacing?: boolean;
}

export type CardActionsClassKey = 'root' | 'action';
