import { combineEpics } from 'redux-observable';
import { signInEpic } from './signInEpic';
import { signOutEpic } from './signOutEpic';
import { signUpEpic } from './signUpEpic';
import { startLoadEpic } from './startLoadEpic';

export const rootEpic = combineEpics(
    signInEpic,
    signOutEpic,
    signUpEpic,
    startLoadEpic
);