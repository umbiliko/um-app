import { SIGN_UP_ABANDON, SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from '../actions/types';

export const signUpReducer = (state = {}, action) => {

    switch (action.type) {

        case SIGN_UP_ABANDON:
            return {
                ...state,
            };

        case SIGN_UP_FAILURE:
            return {
                ...state,
            };

        case SIGN_UP_REQUEST:
            return {
                ...state,
            };

        case SIGN_UP_SUCCESS:
            return {
                ...state,
            };

        default:
            return state;
    }
};