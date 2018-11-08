import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface FormGroupProps
  extends StandardProps<React.HtmlHTMLAttributes<HTMLDivElement>, FormGroupClassKey> {
  row?: boolean;
}

export type FormGroupClassKey = 'root' | 'row';

