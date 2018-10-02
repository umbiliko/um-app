import { SIGN_OUT_SUCCESS } from '../types';

export const signOutSuccess = (payload) => ({
    type: SIGN_OUT_SUCCESS,
    payload
});