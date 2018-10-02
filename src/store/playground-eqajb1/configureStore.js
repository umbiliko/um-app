// Here's lazy loading
// https://stackblitz.com/edit/redux-observable-v1-playground-eqajb1?file=configureStore.js

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { BehaviorSubject } from 'rxjs';

import { ofType } from 'redux-observable';
import { delay, mapTo, mergeMap } from 'rxjs/operators';

const epic1 = action$ =>
    action$.pipe(
        ofType('PING'),
        delay(100),
        mapTo({ type: 'PONG', value: 'epic1' })
    );
const epic2 = action$ =>
    action$.pipe(
        ofType('PING'),
        delay(100),
        mapTo({ type: 'PONG', value: 'epic2' })
    );

const epic$ = new BehaviorSubject(combineEpics(epic1, epic2));
const rootEpic = (...args) =>
    epic$.pipe(
        mergeMap(epic => epic(...args))
    );

export function addEpic(epic) {
    epic$.next(epic);
}
/* const rootEpic = (action$, ...rest) =>
  combineEpics(epic1, epic2, ...etc)(action$, ...rest).pipe(
    takeUntil(action$.pipe(
      ofType('END')
    ))
  ); */

/* function replaceRootEpic(nextRootEpic) {
  store.dispatch({ type: 'END' });
  epicMiddleware.run(nextRootEpic);
} */

export function configureStore() {
    const epicMiddleware = createEpicMiddleware();

    const rootReducer = (state = [], action) => [...state, action];
    const store = createStore(rootReducer,
        applyMiddleware(epicMiddleware)
    );

    epicMiddleware.run(rootEpic);

    store.subscribe(action => {
        const stateElement = document.getElementById('state');
        stateElement.innerText = JSON.stringify(store.getState(), null, 2);
    });

    return store;
}