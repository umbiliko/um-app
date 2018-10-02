import { AnyAction } from 'redux';
import { SET_IS_HIDDEN } from './types';

export function setIsHidden(key: string, value: boolean): AnyAction {
    return {
        payload: {
            key,
            value
        },
        type: SET_IS_HIDDEN
    };
}