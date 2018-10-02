import { AnyAction } from 'redux';
import { SET_IS_LOADING } from './types';

export function setIsLoading(key: string, value: boolean): AnyAction {
    return {
        payload: {
            key,
            value
        },
        type: SET_IS_LOADING
    };
}