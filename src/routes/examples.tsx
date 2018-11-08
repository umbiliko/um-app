import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

const Page =  (props: React.HTMLAttributes<HTMLDivElement> & RouteComponentProps<any>) =>
    (<div {...props} />);

const EmptyPage =  (props: React.HTMLAttributes<HTMLDivElement> & RouteComponentProps<any>) =>
    null;

// component — A React component. When a route with a component prop matches,
// the route will return a new element whose type is the provided React component
// (created using React.createElement).
export const Route1 = () => (<Route path="/path" component={Page} />);

// render — A function that returns a React element [5]. It will be called when the
// path matches. This is similar to component, but is useful for inline rendering
// and passing extra props to the element.
export const Route2 = () => (
    <Route
        path="/path"
        render={(props: RouteComponentProps<any>) => (
            props.match
                ? <Page {...props} />
                : <EmptyPage {...props} />
        )}
    />
);

// children — A function that returns a React element. Unlike the prior two props, this
// will always be rendered, regardless of whether the route’s path matches the current
// location.
export const Route3 = () => (
    <Route
        path="/path"
        children={(props: RouteComponentProps<any>) => (
            props.match
                ? <Page {...props}/>
                : <EmptyPage {...props}/>
        )}
    />
);