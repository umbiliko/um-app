// import { takeUntilDestroy } from 'redux-observable';
// import { Action, applyMiddleware, createStore, Middleware, Store } from 'redux';
// import { BehaviorSubject, Subject } from 'rxjs';
// import { scan, takeUntil } from 'rxjs/operators';
// import { ActionsObservable, combineEpics, createEpicMiddleware, Epic, EpicMiddleware, StateObservable } from 'redux-observable';
import { Middleware, Store } from 'redux';
import { BehaviorSubject } from 'rxjs';
import { scan } from 'rxjs/operators';
import { createEpicMiddleware, Epic, EpicMiddleware } from 'redux-observable';

// https://github.com/redux-observable/redux-observable/issues/525
export class StoreService {

    protected epics$: BehaviorSubject<Array<any>> = (new BehaviorSubject([])).pipe(scan((epics: Array<any>, epic: any): Array<any> => {
        epics.push(epic);

        return epics;
    })) as BehaviorSubject<Array<any>>;

    public store: Store;

    constructor() {
        const middlewares: Middleware[] = [];
        const epicMiddleware: EpicMiddleware<any, any, any, any> = createEpicMiddleware();
        middlewares.push(epicMiddleware);

        /*this.store = createStore<Map<string, any>, Action, any, any>(
            // ...,
            // ...,
            applyMiddleware(...middlewares)
        );*/

        // Run the root epic on the middleware
        /*const cancelEpicMiddleware$: Subject<void> = new Subject<void>();
        const createRootEpic: (epics: Array<Epic<any, any, any, any>>) => Epic<any, any, any, any> = (epics: Array<Epic<any, any, any, any>>): Epic<any, any, any, any> => {
            return (action$: ActionsObservable<any>, state$: StateObservable<any>, dependencies: any): any => {
                cancelEpicMiddleware$.next();

                return combineEpics(...epics)(action$, state$, dependencies).pipe(takeUntil(cancelEpicMiddleware$.asObservable()));
            }
        };*/

        // Subscribe on epics to create a new root epic whenever new epics are added
        /*this.epics$
            .pipe(takeUntilDestroy(this))
            .subscribe((epics: Array<Epic<any, any, any, any>>): void => {
                epicMiddleware.run(createRootEpic(epics));
            });*/
    }

    public addEpic(epic: Epic<any>): void {
        this.epics$.next([epic]);
    }
}

/*
this.epics$: BehaviorSubject<Array<any>> = (new BehaviorSubject([])).pipe(scan((epics: Array<any>, epic: any): Array<any> => {
    epics.push(epic);
    return epics;
})) as BehaviorSubject<Array<any>>;

// ...

const epicMiddleware: EpicMiddleware<any, any, any, any> = createEpicMiddleware();

this.epics$
    .subscribe((epics: Array<any>): void => {
        if(epics.length) {
            epicMiddleware.run(combineEpics(...epics));
        }
    });

// ...

this.epics$.next((action$: ActionsObservable, state$: StateObservable): any => {
    // ... do something...
    return EMPTY;
});
*/

// https://stackblitz.com/edit/redux-observable-v1-playground-eqajb1?file=index.js
// https://stackblitz.com/edit/redux-observable-v1-playground-div6pq?file=index.js
// https://stackblitz.com/edit/redux-observable-v1-playground-rwbenw?file=index.js