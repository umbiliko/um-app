import { AnyAction } from 'redux';
import { SET_IS_INVALID } from './types';

export function setIsInvalid(key: string, value: boolean): AnyAction {
    return {
        payload: {
            key,
            value
        },
        type: SET_IS_INVALID
    };
}