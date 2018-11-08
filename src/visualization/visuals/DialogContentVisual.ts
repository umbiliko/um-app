import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface DialogContentProps
  extends StandardVisual<React.HTMLAttributes<HTMLDivElement>, DialogContentClassKey> {}

export type DialogContentClassKey = 'root';

