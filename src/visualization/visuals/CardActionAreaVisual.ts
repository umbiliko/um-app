import { StandardVisual } from './StandardVisual';
import { ButtonBaseVisual } from './ButtonBaseVisual';

export interface CardActionAreaVisual
    extends StandardVisual<ButtonBaseVisual, CardActionAreaClassKey> {
    focusVisibleClassName?: string;
}

export type CardActionAreaClassKey = 'root' | 'focusVisible' | 'focusHighlight';
