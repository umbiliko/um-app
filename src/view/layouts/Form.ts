import { Layout } from '../primitives';

export interface Form {

}

export const FormTypeName = 'Form';

export default interface FormLayout extends Form, Layout {
    type: typeof FormTypeName;
}
