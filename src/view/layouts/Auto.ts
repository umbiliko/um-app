import { Layout } from '../primitives';

export interface Auto {

}

export const AutoTypeName = 'Auto';

export default interface AutoLayout extends Auto, Layout {
    type: typeof AutoTypeName;
}
