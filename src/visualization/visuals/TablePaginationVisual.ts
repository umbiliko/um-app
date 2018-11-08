import * as React from 'react';
import { StandardVisual } from './StandardVisual';
import { TableCellVisual } from './TableCellVisual';
import { IconButtonVisual } from './IconButtonVisual';
import { SelectVisual } from './SelectVisual';

export interface LabelDisplayedRowsArgs {
  from: number;
  to: number;
  count: number;
  page: number;
}

export interface TablePaginationVisual
  extends StandardVisual<TablePaginationBaseVisual, TablePaginationClassKey> {
  ActionsComponent?: React.ReactType<TablePaginationBaseVisual>;
  backIconButtonProps?: Partial<IconButtonVisual>;
  component?: React.ReactType<TablePaginationBaseVisual>;
  count: number;
  labelDisplayedRows?: (paginationInfo: LabelDisplayedRowsArgs) => React.ReactNode;
  labelRowsPerPage?: React.ReactNode;
  nextIconButtonProps?: Partial<IconButtonVisual>;
  onChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void;
  onChangeRowsPerPage?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  page: number;
  rowsPerPage: number;
  rowsPerPageOptions?: number[];
  SelectProps?: Partial<SelectVisual>;
}

export type TablePaginationBaseVisual = TableCellVisual;

export type TablePaginationClassKey =
  | 'root'
  | 'toolbar'
  | 'spacer'
  | 'menuItem'
  | 'caption'
  | 'input'
  | 'selectRoot'
  | 'select'
  | 'selectIcon'
  | 'actions';

