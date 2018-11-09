import Layout from './Auto';

export interface Column {

}

export const ColumnTypeName = 'Column';

export default interface ColumnLayout extends Column, Omit<Layout, 'type'> {
    type: typeof ColumnTypeName;
}
