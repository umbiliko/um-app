import { isString, isUndefined } from 'ts-util-is';
import { SET_HAS_FAILURE, SET_HAS_MESSAGE, SET_HAS_SUCCESS, SET_HAS_WARNING } from '../actions/types';
import { SET_IS_ENABLED, SET_IS_LOADING, SET_IS_VISIBLE } from '../actions/types';
import { CLEAR_VALUE, SET_VALUE } from '../actions/types';
import { getPath } from '../selectors/getPath';
import { Actions, ISetPayload } from '../actions/change/typings';
import { IKeyed, IRootState, value } from 'um-ts';

export default function (state: IRootState, action: Actions[keyof Actions]) {
    switch (action.type) {
        case CLEAR_VALUE:
            return clearValue(state, action.payload);
        case SET_HAS_FAILURE:
            return applyHasFailure(state, action.payload as ISetPayload<boolean>);
        case SET_HAS_MESSAGE:
            return applyHasMessage(state, action.payload as ISetPayload<boolean>);
        case SET_HAS_SUCCESS:
            return applyHasSuccess(state, action.payload as ISetPayload<boolean>);
        case SET_HAS_WARNING:
            return applyHasWarning(state, action.payload as ISetPayload<boolean>);
        case SET_IS_ENABLED:
            return applyIsEnabled(state, action.payload as ISetPayload<boolean>);
        case SET_IS_LOADING:
            return applyIsLoading(state, action.payload as ISetPayload<boolean>);
        case SET_IS_VISIBLE:
            return applyIsVisible(state, action.payload as ISetPayload<boolean>);
        case SET_VALUE:
            return applyValue(state, action.payload as ISetPayload<value>);
    }
    return state;
}

/*
function set<T>(state: IRootState, propName: string, { key, value }: ISetPayload<T>) {
    const { connectors: { [key]: connector } } = state;

    if (!isUndefined(connector)) {
        const { [propName]: path } = connector;
        if (!isUndefined(path)) {
            // return apply(state, path, value)
        }
    }

    const { [propName]: past } = state;
    const next = { ...past, [key]: value };

    return { ...state, [propName]: next };

}

/*
function applyHasFailure2(state: IRootState, { key, value }: ISetPayload<boolean>) {
    const { connectors: { [key]: connector } } = state;

    if (!isUndefined(connector)) {
    }

    return { ...state, hasFailure: { ...state.hasFailure, [key]: value } };

}*/



const applyHasFailure = (state: IRootState, { key, value }: ISetPayload<boolean>) =>
    ({ ...state, hasFailure: { ...state.hasFailure, [key]: value } });

const applyHasMessage = (state: IRootState, { key, value }: ISetPayload<boolean>) =>
    ({ ...state, hasMessage: { ...state.hasMessage, [key]: value } });

const applyHasSuccess = (state: IRootState, { key, value }: ISetPayload<boolean>) =>
    ({ ...state, hasSuccess: { ...state.hasSuccess, [key]: value } });

const applyHasWarning = (state: IRootState, { key, value }: ISetPayload<boolean>) =>
    ({ ...state, hasWarning: { ...state.hasWarning, [key]: value } });

const applyIsEnabled = (state: IRootState, { key, value }: ISetPayload<boolean>) =>
    ({ ...state, isDisabled: { ...state.isEnabled, [key]: value } });

const applyIsLoading = (state: IRootState, { key, value }: ISetPayload<boolean>) =>
    ({ ...state, isLoading: { ...state.isLoading, [key]: value } });

const applyIsVisible = (state: IRootState, { key, value }: ISetPayload<boolean>) =>
    ({ ...state, isVisible: { ...state.isVisible, [key]: value } });

const applyValue = (state: IRootState, { key, value }: ISetPayload<value>) =>
    ({ ...state, values: { ...state.values, [key]: value } });

const clearValue = (state: IRootState, { key }: IKeyed) => {
    const { valueRefs: { [key]: valueRef }, values: { [key]: value, ...next } } = state;

    let { valueRefs, values } = state;

    if (isString(valueRef)) {
        const path = getPath(key);

        if (path && path.length) {
            //TODO: clear at path
        }
    }

    if (!isUndefined(value)) {
        values = next;
    }

    return { ...state, valueRefs, values };
};