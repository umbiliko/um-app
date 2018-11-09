import Layout from './Auto';

export interface Anchor {

}

export const AnchorTypeName = 'Anchor';

export default interface AnchorLayout extends Anchor, Omit<Layout, 'type'> {
    type: typeof AnchorTypeName;
}
