import { SET_HAS_FAILURE, SET_HAS_MESSAGE, SET_HAS_SUCCESS, SET_HAS_WARNING } from './types';
import { SET_IS_DIRTY, SET_IS_DISABLED, SET_IS_DONE, SET_IS_ENABLED, SET_IS_HIDDEN, SET_IS_INVALID, SET_IS_LOADING, SET_IS_PRISTINE, SET_IS_VALID, SET_IS_VISIBLE } from './types';
import { CLEAR_VALUE, SET_VALUE } from './types';
import { IKeyed, value } from 'um-ts';

export interface ISetPayload<T> extends IKeyed {
    value: T;
}

export type Actions = {
    CLEAR_VALUE: {
        payload: IKeyed,
        type: typeof CLEAR_VALUE;
    },
    SET_HAS_FAILURE: {
        payload: ISetPayload<boolean>;
        type: typeof SET_HAS_FAILURE;
    },
    SET_HAS_SUCCESS: {
        payload: ISetPayload<boolean>;
        type: typeof SET_HAS_SUCCESS;
    },
    SET_HAS_MESSAGE: {
        payload: ISetPayload<boolean>;
        type: typeof SET_HAS_MESSAGE;
    },
    SET_HAS_WARNING: {
        payload: ISetPayload<boolean>;
        type: typeof SET_HAS_WARNING;
    },
    SET_IS_DIRTY: {
        payload: ISetPayload<boolean>;
        type: typeof SET_IS_DIRTY;
    },
    SET_IS_DISABLED: {
        payload: ISetPayload<boolean>;
        type: typeof SET_IS_DISABLED;
    },
    SET_IS_DONE: {
        payload: ISetPayload<boolean>;
        type: typeof SET_IS_DONE;
    },
    SET_IS_ENABLED: {
        payload: ISetPayload<boolean>;
        type: typeof SET_IS_ENABLED;
    },
    SET_IS_HIDDEN: {
        payload: ISetPayload<boolean>;
        type: typeof SET_IS_HIDDEN;
    },
    SET_IS_INVALID: {
        payload: ISetPayload<boolean>;
        type: typeof SET_IS_INVALID
    },
    SET_IS_LOADING: {
        payload: ISetPayload<boolean>;
        type: typeof SET_IS_LOADING;
    },
    SET_IS_PRISTINE: {
        payload: ISetPayload<boolean>;
        type: typeof SET_IS_PRISTINE
    },
    SET_IS_VALID: {
        payload: ISetPayload<boolean>;
        type: typeof SET_IS_VALID
    },
    SET_IS_VISIBLE: {
        payload: ISetPayload<boolean>;
        type: typeof SET_IS_VISIBLE;
    },
    SET_VALUE: {
        payload: ISetPayload<value>;
        type: typeof SET_VALUE;
    }
};