import { AnyAction } from 'redux';
import { SET_IS_DISABLED } from './types';

export function setIsDisabled(key: string, value: boolean): AnyAction {
    return {
        payload: {
            key,
            value
        },
        type: SET_IS_DISABLED
    };
}