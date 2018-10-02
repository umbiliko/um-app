import { AnyAction } from 'redux';
import { SET_HAS_FAILURE } from './types';

export function setHasFailure(key: string, value: boolean): AnyAction {
    return {
        payload: {
            key,
            value
        },
        type: SET_HAS_FAILURE
    };
}