import { Layout } from '../primitives';

export interface Container {

}

export const ContainerTypeName = 'Container';

export default interface ContainerLayout extends Container, Layout {
    type: typeof ContainerTypeName;
}
