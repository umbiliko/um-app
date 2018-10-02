import { SIGN_UP_REQUEST } from '../types';

export const signUpRequest = ({ password, username }) => ({
    type: SIGN_UP_REQUEST,
    payload: {
        password,
        username
    }
});