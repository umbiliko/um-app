import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { InputVisual } from './InputVisual';
import { MenuVisual } from './MenuVisual';
import { SelectInputVisual } from './SelectInputVisual';

export interface SelectVisual extends StandardVisual<InputVisual, SelectClassKey, 'value' | 'onChange'>,
    Pick<SelectInputVisual, 'onChange'> {
  autoWidth?: boolean;
  displayEmpty?: boolean;
  IconComponent?: React.ReactType;
  input?: React.ReactNode;
  MenuProps?: Partial<MenuVisual>;
  multiple?: boolean;
  native?: boolean;
  onClose?: (event: React.ChangeEvent<{}>) => void;
  onOpen?: (event: React.ChangeEvent<{}>) => void;
  open?: boolean;
  renderValue?: (value: SelectVisual['value']) => React.ReactNode;
  SelectDisplayProps?: React.HTMLAttributes<HTMLDivElement>;
  value?: Array<string | number | boolean> | string | number | boolean;
  variant?: 'standard' | 'outlined' | 'filled';
}

export type SelectClassKey =
  | 'root'
  | 'select'
  | 'selectMenu'
  | 'disabled'
  | 'icon'
  | 'filled'
  | 'outlined';

