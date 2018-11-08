import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { FormGroupVisual, FormGroupClassKey } from './FormGroupVisual';

export interface RadioGroupVisual
  extends StandardVisual<FormGroupVisual, RadioGroupClassKey, 'onChange'> {
  name?: string;
  onChange?: (event: React.ChangeEvent<{}>, value: string) => void;
  value?: string;
}

export type RadioGroupClassKey = FormGroupClassKey;
