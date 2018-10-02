import { SIGN_OUT_ABANDON, SIGN_OUT_FAILURE, SIGN_OUT_REQUEST, SIGN_OUT_SUCCESS } from '../actions/types';

export const signOutReducer = (state = {}, action) => {

    switch (action.type) {

        case SIGN_OUT_ABANDON:
            return {
                ...state,
            };

        case SIGN_OUT_FAILURE:
            return {
                ...state,
            };

        case SIGN_OUT_REQUEST:
            return {
                ...state,
            };

        case SIGN_OUT_SUCCESS:
            return {
                ...state,
            };

        default:
            return state;
    }
};