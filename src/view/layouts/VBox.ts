import { Layout } from '../primitives';

export interface VBox {

}

export const VBoxTypeName = 'VBox';

export default interface VBoxLayout extends VBox, Layout {
    type: typeof VBoxTypeName;
}
