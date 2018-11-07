import * as React from 'react';
import { useReducer } from 'react';
import LocaleContext from '../LocaleContext';
import PresenterContext from '../PresenterContext';
import reducer, { ShellState, setLocale, setPresenter, setTheme } from './reducer'

export interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
    locale: string;
    presenter: string;
    theme: string;
}

export default ({ children, locale, presenter, theme }: ShellProps) => {

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

    return (
        <LocaleContext.Provider value={ this.state.locale } >
            <PresenterContext.Provider value={state.presenter} >
                { children }
            </PresenterContext.Provider>
        </LocaleContext.Provider>
    );
}