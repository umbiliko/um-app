import * as React from 'react';
import ThemeContext from './ThemeContext';

class ThemeProvider extends React.Component {
    public state = { theme: 'light' };

    public render() {
        return (
            <ThemeContext.Provider value= { this.state.theme } >
            { this.props.children }
            </ThemeContext.Provider>
    );
    }
}

export default ThemeProvider;
