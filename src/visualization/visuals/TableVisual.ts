import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface TableVisual extends StandardVisual<TableBaseVisual, TableClassKey> {
  component?: React.ReactType<TableBaseProps>;
  padding?: Padding;
}

export type TableBaseProps = React.TableHTMLAttributes<HTMLTableElement>;

export type Padding = 'default' | 'checkbox' | 'dense' | 'none';

export type TableClassKey = 'root';

declare const Table: React.ComponentType<TableProps>;

export default Table;
