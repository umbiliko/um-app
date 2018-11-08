import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface TableHeadVisual extends StandardVisual<TableHeadBaseVisual, TableHeadClassKey> {
  component?: React.ReactType<TableHeadBaseProps>;
}

export type TableHeadClassKey = 'root';

export type TableHeadBaseProps = React.HTMLAttributes<HTMLTableSectionElement>;

declare const TableHead: React.ComponentType<TableHeadProps>;

export default TableHead;
