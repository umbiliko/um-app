import { Layout } from '../primitives';

export interface Absolute {
}

export const AbsoluteTypeName = 'Absolute';

export default interface AbsoluteLayout extends Absolute, Layout {
    type: typeof AbsoluteTypeName;
}
