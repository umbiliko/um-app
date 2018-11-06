import * as React from 'react';
import { ClassNameMap } from './ClassNameMap';

export interface StyledVisual<ClassKey extends string = string> {
    classes?: Partial<ClassNameMap<ClassKey>>;
    innerRef?: React.Ref<any> | React.RefObject<any>;
}