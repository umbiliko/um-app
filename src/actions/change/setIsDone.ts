import { AnyAction } from 'redux';
import { SET_IS_DONE } from './types';

export function setIsDone(key: string, value: boolean): AnyAction {
    return {
        payload: {
            key,
            value
        },
        type: SET_IS_DONE
    };
}