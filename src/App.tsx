import * as React from 'react';
import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppContainer from './containers/AppContainer';
import Spinner from './components/Spinner';
import logo from './logo.svg';

// Jared Palmer on Suspense: https://youtu.be/SCQgE4mTnjU
// suspense can be used for assets:
// * audio
// * components
// * fonts
// * images
// * script tags
// * style sheets
// * videos
const HomePage = React.lazy(() => import ('./pages/home/HomeContainer'));

function App() {
    return (
        <div className="App">
            <Suspense fallback={<Spinner size="xl" />}>

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
                    <Router>
                        <Nav default>
                            <HomePage path="/" />
                        </Nav>
                    </Router>
                </AppContainer>

            </Suspense>
        </div>
    );
}

export default App;
