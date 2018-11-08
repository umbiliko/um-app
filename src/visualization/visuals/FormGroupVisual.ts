import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface FormGroupVisual
  extends StandardVisual<React.HtmlHTMLAttributes<HTMLDivElement>, FormGroupClassKey> {
  row?: boolean;
}

export type FormGroupClassKey = 'root' | 'row';
