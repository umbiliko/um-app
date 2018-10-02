import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap } from 'rxjs/operators';
import { SIGN_IN_REQUEST } from '../actions/types';
import { signInSuccess } from '../actions/signIn';

export const signInEpic = (action$, state$) => action$.pipe(
    ofType(SIGN_IN_REQUEST),
    mergeMap(action =>
        ajax.getJSON(`\sign-out\${state$.auth.token}`).pipe(
            map(response => signInSuccess)
        )
    )
);