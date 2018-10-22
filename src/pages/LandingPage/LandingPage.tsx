import * as React from 'react';
import { Helmet } from 'react-helmet';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LockIcon from '@material-ui/icons/Lock';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { GitHubIcon } from '../../components/icons';
import isAuthorised from '../../selectors/isAuthorized';

type StartPageProps = {
    classes: any;
    history: any;
    theme: any;
};

export class LandingPage extends React.Component<StartPageProps> {

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
                <AppBar position='static'>
                    <Toolbar disableGutters={true}>
                        <div style={{ flex: 1 }} />

                        <Tooltip id="tooltip-icon1" title="Sign in">
                            <IconButton
                                name='signin'
                                aria-label='Open Github'
                                color='inherit'
                                onClick={this.signIn}
                                rel='noopener'
                            >
                                <LockIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip id="tooltip-icon2" title="GitHub repository">
                            <IconButton
                                name='github'
                                aria-label='Open Github'
                                color='inherit'
                                href='https://github.com/TarikHuber/react-most-wanted'
                                target='_blank'
                                rel='noopener'
                            >
                                <GitHubIcon />
                            </IconButton>
                        </Tooltip>
                    </Toolbar>
                </AppBar>
                <div className={classes.root}>
                    <div className={classes.hero}>
                        <div className={classes.content}>
                            <img
                                src='/rmw.svg'
                                alt='Material-UI Logo'
                                className={classes.logo}
                            />
                            <div className={classes.text}>
                                <Typography
                                    variant='display2'
                                    align='center'
                                    component='h1'
                                    color='inherit'
                                    gutterBottom={true}
                                    className={classes.title}
                                >
                                    {'REACT MOST WANTED'}
                                </Typography>
                                <Typography
                                    variant='headline'
                                    component='h2'
                                    color='inherit'
                                    gutterBottom={true}
                                    className={classes.headline}
                                >
                                    {'React Starter-Kit with all Most Wanted features.'}
                                </Typography>
                                <Button
                                    onClick={this.signIn}
                                    className={classes.button}
                                    variant='outlined'
                                    color='primary'
                                >
                                    {'Get Started'}
                                </Button>
                            </div>

                            <div className={classes.cardsContent}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography variant="headline" component="h2">Installation</Typography>
                                        <br />
                                        <Typography>{`Just run this script to start:`}</Typography>
                                        <br />
                                        <Typography className={classes.pos} color="textSecondary"> npx create-react-app test-app --scripts-version rmw-react-scripts </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography variant="headline" component="h2">Usage</Typography>
                                        <br />
                                        <Typography  >{`Set your configuration to the App component:`}</Typography>
                                        <br />
                                        <Typography className={classes.pos} color="textSecondary">
                                            {`import App from 'rmw-shell'`}
                                            <br />
                                            {`<App appConfig={{ configureStore, ...config }} />`}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography variant="headline" component="h2">What is this?</Typography>
                                        <Typography noWrap={false} color="textSecondary">
                                            {`This is a OPEN SOURCE demo application`}
                                            <br />
                                            {`This demo has no purpose to do something as an app.`}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={this.signIn} >Get started</Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}