import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppContainer from "./containers/AppContainer";

import logo from './logo.svg';

function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
                <AppContainer>
                    <div>
                        App Content
                    </div>
                </AppContainer>
            </Router>
        </div>
    );
}

export default App;
