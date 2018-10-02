import { AnyAction } from 'redux';
import { SET_IS_ENABLED } from './types';

export function setIsEnabled(key: string, value: boolean): AnyAction {
    return {
        payload: {
            key,
            value
        },
        type: SET_IS_ENABLED
    };
}