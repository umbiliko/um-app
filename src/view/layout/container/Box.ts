import Layout from './Container';

export interface Box {

}

export const BoxTypeName = 'Box';

export default interface BoxLayout extends Box, Omit<Layout, 'type'> {
    type: typeof BoxTypeName;
}
