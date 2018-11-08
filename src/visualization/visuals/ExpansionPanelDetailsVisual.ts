import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface ExpansionPanelDetailsVisual
  extends StandardVisual<React.HTMLAttributes<HTMLDivElement>, ExpansionPanelDetailsClassKey> {}

export type ExpansionPanelDetailsClassKey = 'root';

