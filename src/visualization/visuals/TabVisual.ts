import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { ButtonBaseVisual } from './ButtonBase';

export interface TabVisual extends StandardVisual<ButtonBaseVisual, TabClassKey, 'onChange'> {
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: string | React.ReactElement<any>;
  value?: any;
  label?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<{ checked: boolean }>, value: any) => void;
  onClick?: React.EventHandler<any>;
  selected?: boolean;
  style?: React.CSSProperties;
  textColor?: string | 'secondary' | 'primary' | 'inherit';
}

export type TabClassKey =
  | 'root'
  | 'labelIcon'
  | 'textColorInherit'
  | 'textColorPrimary'
  | 'textColorSecondary'
  | 'selected'
  | 'disabled'
  | 'fullWidth'
  | 'wrapper'
  | 'labelContainer'
  | 'label'
  | 'labelWrapped';

declare const Tab: React.ComponentType<TabProps>;

export default Tab;
