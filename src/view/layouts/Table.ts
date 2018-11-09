import { Layout } from '../primitives';

export interface Table {

}

export const TableTypeName = 'Table';

export default interface TableLayout extends Table, Layout {
    type: typeof TableTypeName;
}
