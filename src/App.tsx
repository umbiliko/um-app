import * as React from 'react';
import './App.css';
import { value } from 'um-ts';
import StartBar from './containers/StartBar';
import StartGraph from './containers/StartGraph';

import logo from './logo.svg';

class App extends React.Component {
    public render() {
        const title: value = "Welcome to Umbiliko";

        return (
            <div className="App">
                <StartBar />
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">{title}</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
                <StartGraph />
            </div>
        );
    }
}

export default App;
