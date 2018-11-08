import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { SnackbarContentVisual } from './SnackbarContentVisual';
import { TransitionHandlerVisual, TransitionVisual } from './TransitionVisual';
import { ClickAwayListenerVisual } from './ClickAwayListenerVisual';

export interface SnackbarOrigin {
  horizontal: 'left' | 'center' | 'right';
  vertical: 'top' | 'bottom';
}

export interface SnackbarVisual
  extends StandardVisual<
      React.HTMLAttributes<HTMLDivElement> & Partial<TransitionHandlerVisual>,
      SnackbarClassKey
    > {
  action?: SnackbarContentVisual['action'];
  anchorOrigin?: SnackbarOrigin;
  autoHideDuration?: number;
  ClickAwayListenerProps?: Partial<ClickAwayListenerVisual>;
  ContentProps?: Partial<SnackbarContentVisual>;
  disableWindowBlurListener?: boolean;
  message?: SnackbarContentVisual['message'];
  onClose?: (event: React.SyntheticEvent<any>, reason: string) => void;
  onMouseEnter?: React.MouseEventHandler<any>;
  onMouseLeave?: React.MouseEventHandler<any>;
  open: boolean;
  resumeHideDuration?: number;
  TransitionComponent?: React.ReactType;
  transitionDuration?: TransitionVisual['timeout'];
  TransitionProps?: TransitionVisual;
}

export type SnackbarClassKey =
  | 'root'
  | 'anchorOriginTopCenter'
  | 'anchorOriginBottomCenter'
  | 'anchorOriginTopRight'
  | 'anchorOriginBottomRight'
  | 'anchorOriginTopLeft'
  | 'anchorOriginBottomLeft';
