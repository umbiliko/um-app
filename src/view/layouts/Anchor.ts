import { Layout } from '../primitives';

export interface Anchor {

}

export const AnchorTypeName = 'Anchor';

export default interface AnchorLayout extends Anchor, Layout {
    type: typeof AnchorTypeName;
}
