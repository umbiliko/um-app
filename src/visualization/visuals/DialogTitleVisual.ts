import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface DialogTitleVisual
  extends StandardVisual<React.HTMLAttributes<HTMLDivElement>, DialogTitleClassKey> {
  disableTypography?: boolean;
}

export type DialogTitleClassKey = 'root';

