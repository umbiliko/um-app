import { applyMiddleware, createStore, Middleware } from 'redux';
import { BehaviorSubject } from 'rxjs';
import { scan } from 'rxjs/operators';
import { EpicMiddleware, createEpicMiddleware } from 'redux-observable';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import thunk from 'redux-thunk';
import { initReducer } from '../reducers/rootReducer';
import { rootEpic } from '../services/rootEpic';
import initState from './init';
import addEnvironmentMiddlewares from './addEnvironmentMiddlewares';
import composeEnhancers from './composeEnhancers';

export const epic$: BehaviorSubject<Array<any>> = (new BehaviorSubject(rootEpic)).pipe(scan((epics: Array<any>, epic: any): Array<any> => {
    epics.push(epic);
    return epics;
})) as BehaviorSubject<Array<any>>;
// sometime later...add another Epic, keeping the state of the old ones...
//
// epic$.next(asyncEpic1);
//
// and again later add another...
//
// epic$.next(asyncEpic2);

export function configureStore() {
    let store;
    
    const epicMiddleware: EpicMiddleware<any, any, any, any> = createEpicMiddleware();
    /*
    const rootEpic2 = (action$, state$) => epic$.pipe(
        mergeMap(epic => epic(action$, state$))
    );
    */
    const middlewares: Middleware[] = [thunk, epicMiddleware];

    addEnvironmentMiddlewares(middlewares);
    
    const enhancer = composeEnhancers(
        applyMiddleware(...middlewares)
    );

    const persistorConfig = {
        key: 'root',
        storage,
        blacklist: ['auth', 'form', 'connection', 'initialization', 'messaging', 'simpleValues']
    };

    const reducer = persistReducer(persistorConfig, initReducer(initState));

    store = createStore(reducer, initState, enhancer);

    try {
        persistStore(store);
    } catch (e) {
        console.error(e);
    }

    epicMiddleware.run(rootEpic);

    return store;
}