import { START_LOAD_ABANDON, START_LOAD_FAILURE, START_LOAD_REQUEST, START_LOAD_SUCCESS } from '../actions/types';

export const startLoadReducer = (state = {}, action) => {

    switch (action.type) {

        case START_LOAD_ABANDON:
            return {
                ...state,
            };

        case START_LOAD_FAILURE:
            return {
                ...state,
            };

        case START_LOAD_REQUEST:
            return {
                ...state,
            };

        case START_LOAD_SUCCESS:
            return {
                ...state,
            };

        default:
            return state;
    }
};