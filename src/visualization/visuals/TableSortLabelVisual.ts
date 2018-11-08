import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { ButtonBaseVisual } from './ButtonBaseVisual';
import { SvgIconVisual } from './SvgIconVisual';

export interface TableSortLabelVisual
  extends StandardVisual<ButtonBaseVisual, TableSortLabelClassKey> {
  active?: boolean;
  direction?: 'asc' | 'desc';
  hideSortIcon?: boolean;
  IconComponent?: React.ComponentType<SvgIconVisual>;
}

export type TableSortLabelClassKey =
  | 'root'
  | 'active'
  | 'icon'
  | 'iconDirectionDesc'
  | 'iconDirectionAsc';

declare const TableSortLabel: React.ComponentType<TableSortLabelVisual>;

export default TableSortLabel;
