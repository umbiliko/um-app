import * as React from 'react';

export interface ClickAwayListenerVisual {
  children: React.ReactNode;
  mouseEvent?: 'onClick' | 'onMouseDown' | 'onMouseUp' | false;
  onClickAway: (event: React.ChangeEvent<{}>) => void;
  touchEvent?: 'onTouchStart' | 'onTouchEnd' | false;
}
