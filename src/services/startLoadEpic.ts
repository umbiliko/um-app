import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, map, mergeMap, takeUntil } from 'rxjs/operators';
import { START_LOAD_ABANDON, START_LOAD_FAILURE, START_LOAD_REQUEST } from '../actions/types';
import { startLoadSuccess } from '../actions/startLoad';

const urlLesMiserables = 'https://raw.githubusercontent.com/uber/react-vis-force/master/stories/les-miserables.json';
//const urlModules = 'https://raw.githubusercontent.com/umbiliko/data/master/modules.json';

export const startLoadEpic = action$ => action$.pipe(
    ofType(START_LOAD_REQUEST),
    mergeMap(action =>
        ajax.getJSON(urlLesMiserables).pipe(
            map(response => startLoadSuccess(response)),
            catchError(error => of({
                type: START_LOAD_FAILURE,
                payload: error.xhr.response,
                error: true
            })),
            takeUntil(action$.pipe(
                ofType(START_LOAD_ABANDON)
            ))
        )
    )
);