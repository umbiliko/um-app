import { StandardVisual } from './StandardVisual';

export interface ListItemIconVisual
  extends StandardVisual<React.HTMLAttributes<HTMLDivElement>, ListItemIconClassKey> {
  children: React.ReactElement<any>;
}

export type ListItemIconClassKey = 'root';
