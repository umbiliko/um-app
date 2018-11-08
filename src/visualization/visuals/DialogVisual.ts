import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { PaperVisual } from './PaperVisual';
import { ModalVisual } from './ModalVisual';
import { TransitionHandlerProps, TransitionVisual } from './TransitionVisual';

export interface DialogProps
  extends StandardVisual<ModalVisual & Partial<TransitionHandlerProps>, DialogClassKey, 'children'> {
  children?: React.ReactNode;
  fullScreen?: boolean;
  fullWidth?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | false;
  PaperProps?: Partial<PaperVisual>;
  scroll?: 'body' | 'paper';
  TransitionComponent?: React.ReactType;
  transitionDuration?: TransitionVisual['timeout'];
  TransitionProps?: TransitionVisual;
}

export type DialogClassKey =
  | 'root'
  | 'scrollPaper'
  | 'scrollBody'
  | 'paper'
  | 'paperScrollPaper'
  | 'paperScrollBody'
  | 'paperWidthXs'
  | 'paperWidthSm'
  | 'paperWidthMd'
  | 'paperFullWidth'
  | 'paperFullScreen';

