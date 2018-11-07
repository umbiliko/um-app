import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import RouterContext from './RouterContext';

const RouterProvider = ({ children }) => (
    <BrowserRouter>
        <Route>
            {(routeProps) => (
                <RouterContext.Provider value={routeProps}>
                    {children}
                </RouterContext.Provider>
            )}
        </Route>
    </BrowserRouter>
);

export default RouterProvider;