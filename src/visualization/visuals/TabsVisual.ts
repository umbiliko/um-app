import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { ButtonBaseVisual } from './ButtonBaseVisual';
import { TabIndicatorVisual } from './TabIndicatorVisual';

export interface TabsVisual
  extends StandardVisual<ButtonBaseVisual, TabsClassKey, 'onChange' | 'action' | 'component'> {
  action?: (actions: TabsActions) => void;
  centered?: boolean;
  children?: React.ReactNode;
  component?: React.ReactType<TabsVisual>;
  fullWidth?: boolean;
  indicatorColor?: 'secondary' | 'primary' | string;
  onChange?: (event: React.ChangeEvent<{}>, value: any) => void;
  scrollable?: boolean;
  ScrollButtonComponent?: React.ReactType;
  scrollButtons?: 'auto' | 'on' | 'off';
  TabIndicatorProps?: Partial<TabIndicatorVisual>;
  textColor?: 'secondary' | 'primary' | 'inherit' | string;
  value: any;
  width?: string;
}

export type TabsClassKey =
  | 'root'
  | 'flexContainer'
  | 'scroller'
  | 'fixed'
  | 'scrollable'
  | 'centered'
  | 'scrollButtons'
  | 'scrollButtonsAuto'
  | 'indicator';

export interface TabsActions {
  updateIndicator(): void;
}
