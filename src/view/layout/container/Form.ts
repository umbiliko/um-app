import Layout from './Container';

export interface Form {

}

export const FormTypeName = 'Form';

export default interface FormLayout extends Form, Omit<Layout, 'type'> {
    type: typeof FormTypeName;
}
