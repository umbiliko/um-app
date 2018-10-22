import A2HSProvider from 'a2hs';
import * as React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { value } from 'um-ts';
import { Loading as LoadingComponent } from './components/Loading';
// import './App.css';
/*
import StartBar from './containers/StartBar';
import StartGraph from './containers/StartGraph';

import logo from './logo.svg';
*/
const Loading = () => <LoadingComponent />

export const MainAsync = Loadable({
    loader: () => import('./containers/Main'),
    loading: Loading
})

export const StartAsync = Loadable({
    loader: () => import('./pages/StartPage'),
    loading: Loading
})

class App extends React.Component {

    public render() {
        return (
            <A2HSProvider>
                <Router>
                    <Switch>
                        <Route component={StartAsync} exact={true} path="/" />
                        <Route component={MainAsync} />
                    </Switch>
                </Router>
            </A2HSProvider>
        );
        // const title: value = "Welcome to Umbiliko";
        /*
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
        */
    }
}

export default App;
