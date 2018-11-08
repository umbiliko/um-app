import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface DialogActionsProps
  extends StandardVisual<React.HTMLAttributes<HTMLDivElement>, DialogActionsClassKey> {
  disableActionSpacing?: boolean;
}

export type DialogActionsClassKey = 'root' | 'action';
