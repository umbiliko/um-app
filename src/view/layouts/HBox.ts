import { Layout } from '../primitives';

export interface HBox {

}

export const HBoxTypeName = 'HBox';

export default interface HBoxLayout extends HBox, Layout {
    type: typeof HBoxTypeName;
}
