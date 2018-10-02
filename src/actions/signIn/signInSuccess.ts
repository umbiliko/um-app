import { SIGN_IN_SUCCESS } from '../types';

export const signInSuccess = (payload) => ({
    type: SIGN_IN_SUCCESS,
    payload
});