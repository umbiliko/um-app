import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../components/Loading';
import RestrictedRoute from '../containers/RestrictedRoute';

const AsyncDashboard = Loadable({
    loader: () => import('../modules/SD/Dashboard'),
    loading: Loading
});
const AsyncAbout = Loadable({
    loader: () => import('../modules/SD/About'),
    loading: Loading
});
const AsyncCompany = Loadable({
    loader: () => import('../modules/SD/Company'),
    loading: Loading
});
const AsyncCompanies = Loadable({
    loader: () => import('../modules/SD/Companies'),
    loading: Loading,
    render (loaded, props) {
        [AsyncCompany].map(component => component.preload());  
        const Component = loaded.Component.default;
        return (<Component {...props} />);
    }
});
const AsyncTask = Loadable({
    loader: () => import('../modules/SD/Task'),
    loading: Loading
});
const AsyncTasks = Loadable({
    loader: () => import('../modules/SD/Tasks'),
    loading: Loading,
    render (loaded, props) {
        [AsyncTask].map(component => component.preload());  
        const Component = loaded.Component.default;
        return (<Component {...props} />);
    }
});
const AsyncDocument = Loadable({
    loader: () => import('../modules/SD/Document'),
    loading: Loading
});
const AsyncCollection = Loadable({
    loader: () => import('../modules/SD/Collection'),
    loading: Loading
});

const routes = [
  <RestrictedRoute type='private' path="/" exact component={AsyncDashboard} />,
  <RestrictedRoute type='private' path="/dashboard" exact component={AsyncDashboard} />,
  <RestrictedRoute type='private' path="/about" exact component={AsyncAbout} />,
  <RestrictedRoute type='private' path="/companies" exact component={AsyncCompanies} />,
  <RestrictedRoute type='private' path="/companies/edit/:uid" exact component={AsyncCompany} />,
  <RestrictedRoute type='private' path="/companies/create" exact component={AsyncCompany} />,
  <RestrictedRoute type='private' path="/tasks" exact component={AsyncTasks} />,
  <RestrictedRoute type='private' path="/tasks/edit/:uid" exact component={AsyncTask} />,
  <RestrictedRoute type='private' path="/document" exact component={AsyncDocument} />,
  <RestrictedRoute type='private' path="/collection" exact component={AsyncCollection} />,
]

export default routes;