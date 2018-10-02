// Here's replace the root epic by utilizing a takeUntil(action$.pipe(ofType('END'))
// https://stackblitz.com/edit/redux-observable-v1-playground-rwbenw?file=index.js

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import { ofType } from 'redux-observable';
import { delay, mapTo, takeUntil } from 'rxjs/operators';

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

const rootEpic = (action$, ...rest) =>
    combineEpics(epic1, epic2)(action$, ...rest).pipe(
        takeUntil(action$.pipe(
            ofType('END')
        ))
    );

let epicMiddleware, store;

export function replaceRootEpic(nextRootEpic) {
    store.dispatch({ type: 'END' });
    epicMiddleware.run(nextRootEpic);
}

export function configureStore() {
    epicMiddleware = createEpicMiddleware();

    const rootReducer = (state = [], action) => [...state, action];
    store = createStore(rootReducer,
        applyMiddleware(epicMiddleware)
    );

    epicMiddleware.run(rootEpic);

    store.subscribe(action => {
        const stateElement = document.getElementById('state');
        stateElement.innerText = JSON.stringify(store.getState(), null, 2);
    });

    return store;
}