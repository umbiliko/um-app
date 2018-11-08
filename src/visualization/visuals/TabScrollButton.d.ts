import { StandardVisual } from './StandardVisual';
import { ButtonBaseVisual } from './ButtonBase/ButtonBase';

export interface TabScrollButtonProps
  extends StandardVisual<ButtonBaseVisual, TabScrollButtonClassKey> {
  direction?: 'left' | 'right';
  visible?: boolean;
}

export type TabScrollButtonClassKey = 'root';

declare const TabScrollButton: React.ComponentType<TabScrollButtonProps>;

export default TabScrollButton;
