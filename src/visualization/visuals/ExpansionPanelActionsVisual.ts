import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface ExpansionPanelActionsVisual
  extends StandardVisual<React.HTMLAttributes<HTMLDivElement>, ExpansionPanelActionsClassKey> {}

export type ExpansionPanelActionsClassKey = 'root' | 'action';
