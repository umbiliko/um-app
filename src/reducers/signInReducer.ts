import { SIGN_IN_ABANDON, SIGN_IN_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from '../actions/types';

export const signInReducer = (state = {}, action) => {

    switch (action.type) {

        case SIGN_IN_ABANDON:
            return {
                ...state,
            };

        case SIGN_IN_FAILURE:
            return {
                ...state,
            };

        case SIGN_IN_REQUEST:
            return {
                ...state,
            };

        case SIGN_IN_SUCCESS:
            return {
                ...state,
            };

        default:
            return state;
    }
};