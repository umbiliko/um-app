import { StandardVisual } from './StandardVisual';
import { TypographyVisual } from './TypographyVisual';

export interface DialogContentTextVisual
  extends StandardVisual<TypographyVisual, DialogContentTextClassKey> {}

export type DialogContentTextClassKey = 'root';

