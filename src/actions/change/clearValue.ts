import { AnyAction } from 'redux';
import { CLEAR_VALUE } from'./types';

export function clearValue(key: string): AnyAction {
    return {
        payload: {
            key
        },
        type: CLEAR_VALUE
    };
}