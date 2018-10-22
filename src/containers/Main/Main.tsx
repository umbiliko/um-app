// import App from '../../shell';
import * as React from 'react';
// import config from '../../config';
// import { configureStore } from '../../store';
// import locales from '../../config/locales';
import { Helmet } from 'react-helmet';
// import { addLocalizationData } from '../../shell/config/locales';
import { withA2HS } from 'a2hs';

// addLocalizationData(locales);

type MainProps = {
    setA2HPState: ({ isAppInstallable: boolean }) => void;
};

class Main extends React.Component<MainProps> {
    componentDidMount() {
        const { setA2HPState } = this.props
        // console.log(this.props)
        setA2HPState({ isAppInstallable: true })
    }

    render() {
        return (
            <div>
                <Helmet>
                    <link type='text/css' rel='stylesheet' href='https://cdn.firebase.com/libs/firebaseui/3.0.0/firebaseui.css' />
                    <link type='text/css' rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
                    <link type='text/css' rel='stylesheet' href='index.css' />
                </Helmet>
                
            </div>
        );
    }
}

export default withA2HS(Main);

/* <App appConfig={{ configureStore, ...config }} /> */