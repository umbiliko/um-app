import Layout from './Container';

export interface CheckboxGroup {

}

export const CheckboxGroupTypeName = 'CheckboxGroup';

export default interface CheckboxGroupLayout extends CheckboxGroup, Omit<Layout, 'type'> {
    type: typeof CheckboxGroupTypeName;
}
