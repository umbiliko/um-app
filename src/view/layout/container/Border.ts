import Layout from './Container';

export interface Border {

}

export const BorderTypeName = 'Border';

export default interface BorderLayout extends Border, Omit<Layout, 'type'> {
    type: typeof BorderTypeName;
}
