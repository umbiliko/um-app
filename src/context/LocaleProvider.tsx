import * as React from 'react';
import LocaleContext from './LocaleContext';

class LocaleProvider extends React.Component {
    public state = { locale: 'light' };

    public render() {
        return (
            <LocaleContext.Provider value={ this.state.locale } >
                { this.props.children }
            </LocaleContext.Provider>
        );
    }
}

export default LocaleProvider;

