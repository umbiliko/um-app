import { ReactElement, ReactInstance } from 'react';

export interface PortalVisual {
  children: ReactElement<any>;
  container?: ReactInstance | (() => ReactInstance) | null;
  disablePortal?: boolean;
  onRendered?: () => void;
}

