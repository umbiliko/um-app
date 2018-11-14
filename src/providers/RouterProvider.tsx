import * as React from 'react';
import { RouterProps } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import RouterContext from '../context/RouterContext';

const RouterProvider = ({ children }: React.HTMLAttributes<HTMLElement>) => (
    <BrowserRouter>
        <Route>
            {(routeProps: RouterProps) => (
                <RouterContext.Provider value={routeProps}>
                    {children}
                </RouterContext.Provider>
            )}
        </Route>
    </BrowserRouter>
);

export default RouterProvider;
