import { AnyAction } from 'redux';
import { SET_IS_VISIBLE } from './types';

export function setIsVisible(key: string, value: boolean): AnyAction {
    return {
        payload: {
            key,
            value
        },
        type: SET_IS_VISIBLE
    };
}