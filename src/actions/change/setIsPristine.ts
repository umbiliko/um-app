import { AnyAction } from 'redux';
import { SET_IS_PRISTINE } from './types';

export function setIsPristine(key: string, value: boolean): AnyAction {
    return {
        payload: {
            key,
            value
        },
        type: SET_IS_PRISTINE
    };
}