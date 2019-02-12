import * as React from 'react';
import { useContext, useReducer } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LocaleContext from '../LocaleContext';
import RouterContext from '../RouterContext';
import PresenterContext from '../PresenterContext';
import reducer, { ShellState, setLocale, setPresenter, setTheme } from './reducer';

export interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
    locale: string;
    presenter: string;
    theme: string;
}

export default function Shell({ children, locale, presenter, theme }: ShellProps) {

    const [state, dispatch] = useReducer<ShellState>(reducer, {
        locale: locale || 'en',
        presenter: presenter || 'material-ui',
        theme: theme || 'light'
    });
    
    const actions = {
        setLocale: (value: string) => dispatch(setLocale(value)),
        setPresenter: (value: string) => dispatch(setPresenter(value)),
        setTheme: (value: string) => dispatch(setTheme(value))
    };

    const route = useContext(RouterContext);

    return (
        <LocaleContext.Provider value={state.locale} >
            <PresenterContext.Provider value={state.presenter} >
                <BrowserRouter>
                    <Route>
                        <RouterContext.Provider value={route}>
                            {children}
                        </RouterContext.Provider>
                    </Route>
                </BrowserRouter>
            </PresenterContext.Provider>
        </LocaleContext.Provider>
    );
}