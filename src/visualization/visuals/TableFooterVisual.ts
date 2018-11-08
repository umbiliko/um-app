import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface TableFooterVisual extends StandardVisual<TableFooterBaseVisual, TableFooterClassKey> {
  component?: React.ReactType<TableFooterBaseProps>;
}

export type TableFooterClassKey = 'root';

export type TableFooterBaseProps = React.HTMLAttributes<HTMLTableSectionElement>;

declare const TableFooter: React.ComponentType<TableFooterProps>;

export default TableFooter;
