import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { PaperVisual } from './Paper';

export interface SnackbarContentVisual extends StandardVisual<PaperVisual, SnackbarContentClassKey> {
  action?: React.ReactNode;
  message?: React.ReactNode;
}

export type SnackbarContentClassKey = 'root' | 'message' | 'action';

declare const SnackbarContent: React.ComponentType<SnackbarContentProps>;

export default SnackbarContent;
