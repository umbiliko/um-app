import { compose } from 'redux';

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extensionís options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

export default composeEnhancers;