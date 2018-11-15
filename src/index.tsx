import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
).render(
    <StrictMode>
        <App />
    </StrictMode>
);
registerServiceWorker();
