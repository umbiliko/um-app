import { createBrowserHistory } from 'history';
import {createContext} from 'react';
import { RouterProps } from 'react-router';

export const history = createBrowserHistory();

const context = createContext<RouterProps>({ history });

export default context;
