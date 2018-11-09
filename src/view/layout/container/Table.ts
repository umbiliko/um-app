import Layout from './Container';

export interface Table {

}

export const TableTypeName = 'Table';

export default interface TableLayout extends Table, Omit<Layout, 'type'> {
    type: typeof TableTypeName;
}
