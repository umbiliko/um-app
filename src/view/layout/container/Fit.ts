import Layout from './Container';

export interface Fit {

}

export const FitTypeName = 'Fit';

export default interface FitLayout extends Fit, Omit<Layout, 'type'> {
    type: typeof FitTypeName;
}
