import { AnyAction } from 'redux';
import { SET_IS_VALID } from './types';

export function setIsValid(key: string, value: boolean): AnyAction {
    return {
        payload: {
            key,
            value
        },
        type: SET_IS_VALID
    };
}