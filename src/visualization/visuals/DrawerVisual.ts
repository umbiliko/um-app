import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { ModalVisual } from './ModalVisual';
import { SlideVisual } from './SlideVisual';
import { PaperVisual } from './PaperVisual';
import { Theme } from './Theme';
import { TransitionHandlerVisual, TransitionVisual } from './TransitionVisual';

export interface DrawerVisual
  extends StandardVisual<
      ModalVisual & Partial<TransitionHandlerVisual>,
      DrawerClassKey,
      'open' | 'children'
    > {
  anchor?: 'left' | 'top' | 'right' | 'bottom';
  children?: React.ReactNode;
  elevation?: number;
  ModalProps?: Partial<ModalVisual>;
  open?: boolean;
  PaperProps?: Partial<PaperVisual>;
  SlideProps?: Partial<SlideVisual>;
  theme?: Theme;
  transitionDuration?: TransitionVisual['timeout'];
  variant?: 'permanent' | 'persistent' | 'temporary';
}

export type DrawerClassKey =
  | 'docked'
  | 'paper'
  | 'paperAnchorLeft'
  | 'paperAnchorRight'
  | 'paperAnchorTop'
  | 'paperAnchorBottom'
  | 'paperAnchorDockedLeft'
  | 'paperAnchorDockedTop'
  | 'paperAnchorDockedRight'
  | 'paperAnchorDockedBottom'
  | 'modal';

declare const Drawer: React.ComponentType<DrawerVisual>;

export default Drawer;
