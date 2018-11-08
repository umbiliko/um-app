import { PopoverVisual } from './PopoverVisual';
import { MenuListVisual } from './MenuListVisual';
import { PaperVisual } from './PaperVisual';
import { StandardVisual } from './StandardVisual';
import { TransitionHandlerVisual, TransitionVisual } from './TransitionVisual';

export interface MenuVisual
  extends StandardVisual<PopoverVisual & Partial<TransitionHandlerVisual>, MenuClassKey> {
  disableAutoFocusItem?: boolean;
  MenuListProps?: Partial<MenuListVisual>;
  PaperProps?: Partial<PaperVisual>;
  PopoverClasses?: PopoverVisual['classes'];
  transitionDuration?: TransitionVisual['timeout'] | 'auto';
}

export type MenuClassKey = 'paper';

