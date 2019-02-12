const SET_LOCALE = 'SET_LOCALE';
const SET_PRESENTER = 'SET_PRESENTER';
const SET_THEME = 'SET_THEME';

export interface ShellState {
    locale: string;
    presenter: string;
    theme: string;
}

export interface ShellAction {
    SET_LOCALE: {
        type: typeof SET_LOCALE;
        value: string;
    },
    SET_PRESENTER: {
        type: typeof SET_PRESENTER;
        value: string;
    },
    SET_THEME: {
        type: typeof SET_THEME;
        value: string;
    }
}

export const setLocale = (value: string): ShellAction[typeof SET_LOCALE] => ({ type: SET_LOCALE, value });
export const setPresenter = (value: string): ShellAction[typeof SET_PRESENTER] => ({ type: SET_PRESENTER, value });
export const setTheme = (value: string): ShellAction[typeof SET_THEME] => ({ type: SET_THEME, value });

export default (state: ShellState, action: ShellAction[keyof ShellAction]): ShellState => {

    switch (action.type)
    {
        case SET_LOCALE: return {
            ...state,
            locale: action.value
        };
        case SET_PRESENTER: return {
            ...state,
            presenter: action.value
        };
        case SET_THEME: return {
            ...state,
            theme: action.value
        };

        default: return state;
    }
};