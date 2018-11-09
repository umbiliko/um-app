import Layout from './Fit';

export interface Card {

}

export const CardTypeName = 'Card';

export default interface CardLayout extends Card, Omit<Layout, 'type'> {
    type: typeof CardTypeName;
}
