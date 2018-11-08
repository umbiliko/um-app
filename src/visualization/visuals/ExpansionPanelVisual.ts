import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { CollapseVisual } from './CollapseVisual';
import { PaperVisual } from './PaperVisual';

export interface ExpansionPanelVisual
  extends StandardVisual<PaperVisual, ExpansionPanelClassKey, 'onChange'> {
  CollapseProps?: Partial<CollapseVisual>;
  defaultExpanded?: boolean;
  disabled?: boolean;
  expanded?: boolean;
  onChange?: (event: React.ChangeEvent<{}>, expanded: boolean) => void;
}

export type ExpansionPanelClassKey = 'root' | 'expanded' | 'disabled';

