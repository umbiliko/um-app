import { AnyAction } from 'redux';
import { SET_HAS_MESSAGE } from './types';

export function setHasMessage(key: string, value: boolean): AnyAction {
    return {
        payload: {
            key,
            value
        },
        type: SET_HAS_MESSAGE
    };
}