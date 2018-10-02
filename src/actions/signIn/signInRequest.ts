import { ICredentials } from 'um-ts';
import { SIGN_IN_REQUEST } from '../types';

export const signInRequest = ({ password, username }: ICredentials) => ({
    type: SIGN_IN_REQUEST,
    payload: {
        password,
        username
    }
});
