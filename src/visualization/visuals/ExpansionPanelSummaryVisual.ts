import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { ButtonBaseVisual } from './ButtonBaseVisual';
import { IconButtonPVisual } from './IconButtonVisual';

export interface ExpansionPanelSummaryProps
  extends StandardVisual<ButtonBaseVisual, ExpansionPanelSummaryClassKey> {
  disabled?: boolean;
  expanded?: boolean;
  expandIcon?: React.ReactNode;
  IconButtonProps?: Partial<IconButtonVisual>;
  onChange?: React.ReactEventHandler<{}>;
}

export type ExpansionPanelSummaryClassKey =
  | 'root'
  | 'expanded'
  | 'focused'
  | 'disabled'
  | 'content'
  | 'expandIcon';

declare const ExpansionPanelSummary: React.ComponentType<ExpansionPanelSummaryProps>;

export default ExpansionPanelSummary;
