import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface DialogContentVisual
  extends StandardVisual<React.HTMLAttributes<HTMLDivElement>, DialogContentClassKey> {}

export type DialogContentClassKey = 'root';

