import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap } from 'rxjs/operators';
import { SIGN_OUT_REQUEST } from '../actions/types';
import { signOutSuccess } from '../actions/signOut';

export const signOutEpic = (action$, state$) => action$.pipe(
    ofType(SIGN_OUT_REQUEST),
    mergeMap(action =>
        ajax.getJSON(`\sign-out\${state$.auth.token}`).pipe(
            map(response => signOutSuccess)
        )
    )
);