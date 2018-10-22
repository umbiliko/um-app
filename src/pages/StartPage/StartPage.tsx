import * as React from 'react';
import { Helmet } from 'react-helmet';
import isAuthorised from '../../selectors/isAuthorized';
import StartBar from './containers/StartBar';
import StartGraph from './containers/StartGraph';

type StartPageProps = {
    classes: any;
    history: any;
    theme: any;
};

export class StartPage extends React.Component<StartPageProps> {

    constructor(props: StartPageProps) {
        super(props);

        this.signIn = this.signIn.bind(this);
    }

    componentDidMount() {
        if (!isAuthorised()) {
            this.signIn();
        }
    }

    signIn() {
        // const { history } = this.props;

        // history.push('/signin');
    }

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.main}>
                <Helmet>
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    <meta name="apple-mobile-web-app-status-bar-style" content={theme.palette.primary.main} />
                    <meta name="msapplication-navbutton-color" content={theme.palette.primary.main} />
                    <title>Start Page</title>
                </Helmet>
                <StartBar />
                <StartGraph />
            </div>
        )
    }
}