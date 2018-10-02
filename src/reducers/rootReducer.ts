import { combineReducers } from 'redux';
import { SIGN_OUT_SUCCESS } from '../actions/types';
import { signInReducer } from './signInReducer';
import { signOutReducer } from './signOutReducer';
import { signUpReducer } from './signUpReducer';
import { startLoadReducer } from './startLoadReducer';

export const rootReducer = combineReducers({
    signInReducer,
	signOutReducer,
    signUpReducer,
	startLoadReducer
});

export default rootReducer;

export const initReducer = (initState) => (state, action) => {

	switch(action.type) {

		case SIGN_OUT_SUCCESS:
			state = { ...initState };
			break;
	}

	state = signInReducer(state, action);

	state = signOutReducer(state, action);

	state = signUpReducer(state, action);

	state = startLoadReducer(state, action);

	return state;
}