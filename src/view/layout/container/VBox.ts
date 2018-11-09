import Layout from './Box';

export interface VBox {

}

export const VBoxTypeName = 'VBox';

export default interface VBoxLayout extends VBox, Omit<Layout, 'type'> {
    type: typeof VBoxTypeName;
}
