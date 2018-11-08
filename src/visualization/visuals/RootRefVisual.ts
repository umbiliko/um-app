import * as React from 'react';

export interface RootRefVisual<T = any> {
  rootRef?: ((instance: T | null) => void) | React.RefObject<T>;
}
