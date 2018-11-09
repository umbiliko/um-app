import Layout from './Container';

export interface Auto {

}

export const AutoTypeName = 'Auto';

export default interface AutoLayout extends Auto, Omit<Layout, 'type'> {
    type: typeof AutoTypeName;
}
