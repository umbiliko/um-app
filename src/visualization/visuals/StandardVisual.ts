import { CSSProperties } from 'react';
import { StyledVisual } from './StyledVisual';

/**
 * All standard components exposed by `material-ui` are `StyledComponents` with
 * certain `classes`, on which one can also set a top-level `className` and inline
 * `style`.
 */
export type StandardVisual<C, ClassKey extends string, Removals extends keyof C = never> = Omit<
    C,
    'classes' | Removals
    > &
    StyledVisual<ClassKey> & {
    className?: string;
    style?: CSSProperties;
};