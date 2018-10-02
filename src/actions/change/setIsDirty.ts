import { AnyAction } from 'redux';
import { SET_IS_DIRTY } from './types';

export function setIsDirty(key: string, value: boolean): AnyAction {
    return {
        payload: {
            key,
            value
        },
        type: SET_IS_DIRTY
    };
}