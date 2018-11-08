import * as React from 'react';
import { MenuVisual } from './MenuVisual';

export interface SelectInputVisual {
  autoFocus?: boolean;
  autoWidth: boolean;
  disabled?: boolean;
  IconComponent?: React.ReactType;
  inputRef?: (
    ref: HTMLSelectElement | { node: HTMLInputElement; value: SelectInputVisual['value'] },
  ) => void;
  MenuProps?: Partial<MenuVisual>;
  multiple: boolean;
  name?: string;
  native: boolean;
  onBlur?: React.FocusEventHandler<any>;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>, child: React.ReactNode) => void;
  onClose?: (event: React.ChangeEvent<{}>) => void;
  onFocus?: React.FocusEventHandler<any>;
  onOpen?: (event: React.ChangeEvent<{}>) => void;
  open?: boolean;
  readOnly?: boolean;
  renderValue?: (value: SelectInputVisual['value']) => React.ReactNode;
  SelectDisplayProps?: React.HTMLAttributes<HTMLDivElement>;
  tabIndex?: number;
  value?: string | number | boolean | Array<string | number | boolean>;
  variant?: 'standard' | 'outlined' | 'filled';
}

declare const SelectInput: React.ComponentType<SelectInputVisual>;

export default SelectInput;
