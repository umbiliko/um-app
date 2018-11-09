import { Layout } from '../primitives';

export interface CheckboxGroup {

}

export const CheckboxGroupTypeName = 'CheckboxGroup';

export default interface CheckboxGroupLayout extends CheckboxGroup, Layout {
    type: typeof CheckboxGroupTypeName;
}
