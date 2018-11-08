import { HTMLAttributes } from 'react';
import { Color } from './PropTypes';
import { StandardVisual } from './StandardVisual';

export interface ChipVisual
  extends StandardVisual<HTMLAttributes<HTMLDivElement>, ChipClassKey> {
  avatar?: React.ReactElement<any>;
  clickable?: boolean;
  color?: Color;
  component?: React.ReactType<ChipVisual>;
  deleteIcon?: React.ReactElement<any>;
  icon?: React.ReactElement<any>;
  label?: React.ReactNode;
  onDelete?: React.EventHandler<any>;
  variant?: 'default' | 'outlined';
}

export type ChipClassKey =
  | 'root'
  | 'colorPrimary'
  | 'colorSecondary'
  | 'clickable'
  | 'clickablePrimary'
  | 'clickableSecondary'
  | 'deletable'
  | 'deletablePrimary'
  | 'deletableSecondary'
  | 'outlined'
  | 'outlinedPrimary'
  | 'outlinedSecondary'
  | 'avatar'
  | 'avatarPrimary'
  | 'avatarSecondary'
  | 'avatarChildren'
  | 'label'
  | 'deleteIcon'
  | 'deleteIconPrimary'
  | 'deleteIconSecondary'
  | 'deleteIconOutlinedColorPrimary'
  | 'deleteIconOutlinedColorSecondary';

