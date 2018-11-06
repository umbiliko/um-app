import { StandardVisual } from './StandardVisual';
import { PaperVisual } from './PaperVisual';

export interface CardVisual extends StandardVisual<PaperVisual, CardClassKey> {
  raised?: boolean;
}

export type CardClassKey = 'root';
