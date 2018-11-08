import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { PaperVisual } from './PaperVisual';
import { ModalVisual } from './ModalVisual';
import { TransitionHandlerVisual, TransitionVisual } from './TransitionVisual';

export interface PopoverOrigin {
  horizontal: 'left' | 'center' | 'right' | number;
  vertical: 'top' | 'center' | 'bottom' | number;
}

export interface PopoverPosition {
  top: number;
  left: number;
}

export type PopoverReference = 'anchorEl' | 'anchorPosition' | 'none';

export interface PopoverVisual
  extends StandardVisual<ModalVisual & Partial<TransitionHandlerVisual>, PopoverClassKey, 'children'> {
  action?: (actions: PopoverActions) => void;
  anchorEl?: null | HTMLElement | ((element: HTMLElement) => HTMLElement);
  anchorOrigin?: PopoverOrigin;
  anchorPosition?: PopoverPosition;
  anchorReference?: PopoverReference;
  children?: React.ReactNode;
  elevation?: number;
  getContentAnchorEl?: null | ((element: HTMLElement) => HTMLElement);
  marginThreshold?: number;
  modal?: boolean;
  ModalClasses?: ModalVisual['classes'];
  PaperProps?: Partial<PaperVisual>;
  role?: string;
  transformOrigin?: PopoverOrigin;
  TransitionComponent?: React.ReactType;
  transitionDuration?: TransitionVisual['timeout'] | 'auto';
  TransitionProps?: TransitionVisual;
}

export type PopoverClassKey = 'paper';

export interface PopoverActions {
  updatePosition(): void;
}
