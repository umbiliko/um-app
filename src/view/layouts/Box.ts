import { Layout } from '../primitives';

export interface Box {

}

export const BoxTypeName = 'Box';

export default interface BoxLayout extends Box, Layout {
    type: typeof BoxTypeName;
}
