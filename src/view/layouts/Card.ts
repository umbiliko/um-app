import { Layout } from '../primitives';

export interface Card {

}

export const CardTypeName = 'Card';

export default interface CardLayout extends Card, Layout {
    type: typeof CardTypeName;
}
