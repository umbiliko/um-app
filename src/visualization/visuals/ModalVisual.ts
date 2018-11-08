import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { default as ModalManagerVisual } from './ModalManagerVisual';
import { BackdropVisual } from './BackdropVisual';
import { PortalVisual } from './PortalVisual';

export interface ModalVisual
  extends StandardVisual<React.HtmlHTMLAttributes<HTMLDivElement>, ModalClassKey> {
  BackdropComponent?: React.ReactType<BackdropVisual>;
  BackdropProps?: Partial<BackdropVisual>;
  container?: PortalVisual['container'];
  disableAutoFocus?: boolean;
  disableBackdropClick?: boolean;
  disableEnforceFocus?: boolean;
  disableEscapeKeyDown?: boolean;
  disablePortal?: PortalVisual['disablePortal'];
  disableRestoreFocus?: boolean;
  hideBackdrop?: boolean;
  keepMounted?: boolean;
  manager?: ModalManagerVisual;
  onBackdropClick?: React.ReactEventHandler<{}>;
  onClose?: React.ReactEventHandler<{}>;
  onEscapeKeyDown?: React.ReactEventHandler<{}>;
  onRendered?: PortalVisual['onRendered'];
  open: boolean;
}

export type ModalClassKey = 'root' | 'hidden';

