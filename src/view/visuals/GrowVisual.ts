import { Theme } from './Theme';
import { Transition } from './Transition';
import { Visual } from '../primitives';

export interface Grow extends Omit<Transition, 'timeout'> {
    theme?: Theme;
    timeout?: Transition['timeout'] | 'auto';
}

export const GrowKey = 'Grow';

export default interface GrowVisual extends Visual<Grow> {
    type: typeof GrowKey;
}
