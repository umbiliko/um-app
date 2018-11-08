import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface DialogTitleProps
  extends StandardVisual<React.HTMLAttributes<HTMLDivElement>, DialogTitleClassKey> {
  disableTypography?: boolean;
}

export type DialogTitleClassKey = 'root';

