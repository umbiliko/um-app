import { Theme } from './Theme';
import { Transition } from './Transition';
import { Component, Visual } from '../primitives/index';

export interface ZoomVisual extends Transition {
  theme?: Theme;
}

export const Key = '';

export default interface Visual extends Visual<> {
    type: typeof Key;
}