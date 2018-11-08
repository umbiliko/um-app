import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { InputVisual } from './InputVisual';
import { NativeSelectInputVisual } from './NativeSelectInputVisual';

export interface NativeSelectVisual
  extends StandardVisual<InputVisual, NativeSelectClassKey, 'value' | 'onChange'>,
    Pick<NativeSelectInputVisual, 'onChange'> {
  IconComponent?: React.ReactType;
  input?: React.ReactNode;
  value?: string | number | boolean;
  variant?: 'standard' | 'outlined' | 'filled';
}

export type NativeSelectClassKey =
  | 'root'
  | 'select'
  | 'selectMenu'
  | 'disabled'
  | 'icon'
  | 'filled'
  | 'outlined';

