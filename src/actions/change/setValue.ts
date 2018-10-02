import { AnyAction } from 'redux';
import { SET_VALUE } from './types';

export function setValue(key: string, value: boolean | number | string): AnyAction {
    return {
        payload: {
            key,
            value
        },
        type: SET_VALUE
    };
}