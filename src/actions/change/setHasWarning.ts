import { AnyAction } from 'redux';
import { SET_HAS_WARNING } from './types';

export function setHasWarning(key: string, value: boolean): AnyAction {
    return {
        payload: {
            key,
            value
        },
        type: SET_HAS_WARNING
    };
}