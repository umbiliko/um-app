import { createLogger } from 'redux-logger';

const addEnvironmentMiddlewares = (middlewares) => {
    if (process.env.NODE_ENV !== 'production') {
        const logger = createLogger({});

        middlewares.push(logger); // DEV middlewares
    }
};

export default addEnvironmentMiddlewares;