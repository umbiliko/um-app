import * as React from 'react';
import { StandardVisual } from './StandardVisual';

export interface TableBodyVisual extends StandardVisual<TableBodyBaseVisual, TableBodyClassKey> {
  component?: React.ReactType<TableBodyBaseProps>;
}

export type TableBodyClassKey = 'root';

export type TableBodyBaseProps = React.HTMLAttributes<HTMLTableSectionElement>;

