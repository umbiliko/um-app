import { Layout } from '../primitives';

export interface Fit {

}

export const FitTypeName = 'Fit';

export default interface FitLayout extends Fit, Layout {
    type: typeof FitTypeName;
}
