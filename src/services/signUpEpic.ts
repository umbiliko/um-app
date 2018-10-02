import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, map, mergeMap, takeUntil } from 'rxjs/operators';
import { SIGN_UP_ABANDON, SIGN_UP_FAILURE, SIGN_UP_REQUEST } from '../actions/types';
import { signUpSuccess } from '../actions/signUp';

export const signUpEpic = (action$, state$) => action$.pipe(
    ofType(SIGN_UP_REQUEST),
    mergeMap(action =>
        ajax.getJSON(`\sign-out\${state$.auth.token}`).pipe(
            map(response => signUpSuccess(response)),
            catchError(error => of({
                type: SIGN_UP_FAILURE,
                payload: error.xhr.response,
                error: true
            })),
            takeUntil(action$.pipe(
                ofType(SIGN_UP_ABANDON)
            ))
        )
    )
);