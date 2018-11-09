import { Layout } from '../primitives';

export interface Column {

}

export const ColumnTypeName = 'Column';

export default interface ColumnLayout extends Column, Layout {
    type: typeof ColumnTypeName;
}
