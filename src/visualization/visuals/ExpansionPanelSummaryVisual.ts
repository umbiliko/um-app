import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { ButtonBaseVisual } from './ButtonBaseVisual';
import { IconButtonVisual } from './IconButtonVisual';

export interface ExpansionPanelSummaryVisual
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
