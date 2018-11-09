import { Layout } from '../primitives';

export interface Border {

}

export const BorderTypeName = 'Border';

export default interface BorderLayout extends Border, Layout {
    type: typeof BorderTypeName;
}
