import * as React from 'react';

export interface NativeSelectInputVisual {
  disabled?: boolean;
  IconComponent?: React.ReactType;
  inputRef?: (
    ref: HTMLSelectElement | { node: HTMLInputElement; value: NativeSelectInputVisual['value'] },
  ) => void;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>, child: React.ReactNode) => void;
  value?: string | number | boolean;
  variant?: 'standard' | 'outlined' | 'filled';
}
