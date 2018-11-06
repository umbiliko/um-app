import { ReactInstance } from 'react';
export const AppBar = 'AppBar';
export const Controls = 'Controls';

export interface Visual {
    AppBar: {
        key: KeyType | KeyArray;
        type: typeof AppBar;
    },
    Controls: {
        key: KeyType | KeyArray;
        type: typeof Controls;
    }
}

export type Visualizer = (visual: Visual[keyof Visual]) => ReactInstance;

export type Presenter = (schema: {}, effects: {}, root: Visual[keyof Visual]) => ReactInstance;