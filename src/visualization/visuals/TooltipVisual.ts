import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { TransitionVisual } from './TransitionVisual';

export interface TooltipVisual
  extends StandardVisual<React.HTMLAttributes<HTMLDivElement>, TooltipClassKey, 'title'> {
  children: React.ReactElement<any>;
  disableFocusListener?: boolean;
  disableHoverListener?: boolean;
  disableTouchListener?: boolean;
  enterDelay?: number;
  enterTouchDelay?: number;
  id?: string;
  interactive?: boolean;
  leaveDelay?: number;
  leaveTouchDelay?: number;
  onClose?: (event: React.ChangeEvent<{}>) => void;
  onOpen?: (event: React.ChangeEvent<{}>) => void;
  open?: boolean;
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
  PopperProps?: object;
  title: React.ReactNode;
  TransitionComponent?: React.ReactType;
  TransitionProps?: TransitionVisual;
}

export type TooltipClassKey =
  | 'popper'
  | 'tooltip'
  | 'touch'
  | 'tooltipPlacementLeft'
  | 'tooltipPlacementRight'
  | 'tooltipPlacementTop'
  | 'tooltipPlacementBottom';
