import Layout from './Box';

export interface HBox {

}

export const HBoxTypeName = 'HBox';

export default interface HBoxLayout extends HBox, Omit<Layout, 'type'> {
    type: typeof HBoxTypeName;
}
