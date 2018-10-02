import { isNull, isString, isUndefined } from 'ts-util-is';
import { getIn } from './getIn';
import { IConnected, IRootState } from 'um-ts';

export const getConnected = (state: IRootState, ownProps): IConnected => {

    const { key } = ownProps;

    const {
        hasFailure: { [key]: hasFailure },
        hasMessage: { [key]: hasMessage },
        hasSuccess: { [key]: hasSuccess },
        hasWarning: { [key]: hasWarning },
        isDirty: { [key]: isDirty },
        isDisabled: { [key]: isDisabled },
        isDone: { [key]: isDone },
        isEnabled: { [key]: isEnabled },
        isHidden: { [key]: isHidden },
        isInvalid: { [key]: isInvalid },
        isLoading: { [key]: isLoading },
        isPristine: { [key]: isPristine },
        isValid: { [key]: isValid },
        isVisible: { [key]: isVisible },
        value: { [key]: value },
        valueRef: { [key]: valueRef }
    } = state;

    const test = (value) => isUndefined(value) || isNull(value) ? undefined : value !== false;

    const getTested = (value?: boolean | string) =>
        test(isString(value) ? getIn(state, { key: value }) : value);

    const connected: IConnected = {
        hasFailure: getTested(hasFailure),
        hasMessage: getTested(hasMessage),
        hasSuccess: getTested(hasSuccess),
        hasWarning: getTested(hasWarning),
        isDirty: getTested(isDirty),
        isDisabled: getTested(isDisabled),
        isDone: getTested(isDone),
        isEnabled: getTested(isEnabled),
        isHidden: getTested(isHidden),
        isInvalid: getTested(isInvalid),
        isLoading: getTested(isLoading),
        isPristine: getTested(isPristine),
        isValid: getTested(isValid),
        isVisible: getTested(isVisible),
        value: isString(valueRef) ? getIn(state, { key: valueRef }) || value : value
    };

    return connected;
};