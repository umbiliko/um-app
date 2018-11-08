import * as React from 'react';
import { DrawerVisual } from './DrawerVisual';

export interface SwipeableDrawerVisual extends Omit<DrawerVisual, 'onClose' | 'open'> {
  disableBackdropTransition?: boolean;
  disableDiscovery?: boolean;
  disableSwipeToOpen?: boolean;
  hysteresis?: number;
  minFlingVelocity?: number;
  onClose: React.ReactEventHandler<{}>;
  onOpen: React.ReactEventHandler<{}>;
  open: boolean;
  swipeAreaWidth?: number;
}
