import { AnyAction } from 'redux';
import { SET_HAS_SUCCESS } from './types';

export function setHasSuccess(key: string, value: boolean): AnyAction {
    return {
        payload: {
            key,
            value
        },
        type: SET_HAS_SUCCESS
    };
}