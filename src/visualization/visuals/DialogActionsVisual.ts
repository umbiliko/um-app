import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface DialogActionsVisual
  extends StandardVisual<React.HTMLAttributes<HTMLDivElement>, DialogActionsClassKey> {
  disableActionSpacing?: boolean;
}

export type DialogActionsClassKey = 'root' | 'action';
