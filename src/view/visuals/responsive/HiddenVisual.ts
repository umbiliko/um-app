import { Component } from '../../primitives/Component';
import HiddenJs from './HiddenJs';
import { Visual } from '../../primitives';

export interface Hidden extends Component<{}, never>, HiddenJs {
    implementation?: 'js' | 'css';
}

export const HiddenKey = 'Icon';

export default interface HiddenVisual extends Visual<Hidden> {
    type: typeof HiddenKey;
}
