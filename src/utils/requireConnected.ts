import { IConnected } from 'um-ts';

export function requireConnected(params: IConnected, defaults: IConnected | undefined = undefined): Required<IConnected> {
    
    // const is = (value?: boolean): boolean | undefined => isBoolean(value) && value;
    // const isNot = (value?: boolean): boolean | undefined => isBoolean(value) && value == false;
    
    return {
        hasFailure: params.hasFailure || false,
        hasMessage: params.hasMessage || params.hasFailure || params.hasSuccess || params.hasWarning || false,
        hasSuccess: params.hasSuccess || false,
        hasWarning: params.hasWarning || false,
        isDisabled: params.isDisabled || (params.isEnabled == false),
        isDirty: params.isDirty || (params.isPristine == false),
        isDone: params.isDone || !(params.isLoading === true),
        isEnabled: params.isEnabled || !(params.isDisabled == true),
        isHidden: params.isHidden || (params.isVisible == false),
        isInvalid: params.isInvalid || (params.isValid == false),
        isLoading: params.isLoading || (params.isDone == false),
        isPristine: params.isPristine || !(params.isDirty == false),
        isValid: params.isValid || !(params.isInvalid == false),
        isVisible: params.isVisible || !(params.isHidden == true),
        value: params.value
    }
}