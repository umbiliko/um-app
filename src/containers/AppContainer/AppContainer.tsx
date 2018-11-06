import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Component, useContext, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import Spinner from 'src/components/Spinner';
import { LocaleContext, ThemeContext } from 'src/context';
import useFormInput from 'src/effects/useFormInput';
import useMedia from 'src/effects/useMedia';

export interface AppProps extends RouteComponentProps {
    name?: string;
}

export interface AppState {
    name?: string;
    surname?: string;
}

export interface AppContext {
}

const appContext = React.createContext<AppContext>({});

// https://medium.com/@baphemot/understanding-react-suspense-1c73b4b0b1e6
export class AppContainer extends Component<AppProps, AppState> {

    static get propTypes() {
        return {
            history: PropTypes.object.isRequired,
            location: PropTypes.object.isRequired,
            match: PropTypes.object.isRequired,
            staticContext: PropTypes.object
        };
    }

    static contextType = appContext;

    public state: AppState = {
    };

    constructor(props: AppProps) {
        super(props);
    }

    //  lifecycle method which gets fired after an error has already 
    // happened. It’s great for logging errors to the server. It also lets you show a different UI to the user by calling setState.
    componentDidCatch() {
        // state updated are merged
        this.setState((state, props) => ({
            // counter: state.counter + props.increment
        }));
    }

    componentDidMount() {
        // let value = this.context;
        /* perform a side-effect at mount using the value of MyContext */
        document.title = this.props.name || 'React App';
    }
    
    componentDidUpdate(prevProps: AppProps) {
        // let value = this.context;
        /* ... */
        document.title = this.props.name || 'React App';
    }

    componentWillUnmount() {
        // let value = this.context;
        /* ... */
    }
    
    // returns a new state after an error
    getDerivedStateFromError() {
        return ({

        });
    }

    handleClick = (id: string) => {
        /*this.setState({
            curren: id
        });

        this.deferSetState({
            next: id
        });*/
    }

    render() {
        const locale = useContext(LocaleContext);
        const theme = useContext(ThemeContext);
        
        const name = useFormInput(null);
        const [surname, setSurname] = useState('Poppings');
        const [height, setHeight] = useState(window.innerHeight);
        const [width, setWidth] = useState(window.innerWidth);
        const small = useMedia('(max-width: 400px)');
        const large = useMedia("(min-width: 800px)");

        useEffect(() => {
            document.title = this.props.name || 'React App';
        });

        useEffect(() => {
            const handleResize = () => {
                setHeight(window.innerHeight);
                setWidth(window.innerWidth);
            };

            document.addEventListener('resize', handleResize);
            // cleanup effect
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        });

        function handleSurnameChange(e: React.ChangeEvent<{ value: string }>) {
            setSurname({ name: e.target.value });
        }
        
        return (
            <div>
                <input {...name} />
                <input value={surname} onChange={handleSurnameChange} />
                <span>{locale}</span>
                <span>{theme}</span>
                <span>{height}</span>
                <span>{width}</span>
                <LocaleContext.Consumer>
                    {loc => (
                        <span>{loc}</span>
                    )}
                </LocaleContext.Consumer>
                <ThemeContext.Consumer>
                    {thm => (
                        <span>{thm}</span>
                    )}
                </ThemeContext.Consumer>
                {/* <Suspense delayMS={100} fallback={<Spinner></Spinner>}>
                    {0}
                </Suspense> */}
                <div>
                    <h3>Media</h3>
                    <p>Small? {small ? "Yep" : "Nope"}</p>
                    <p>Large? {large ? "Yep" : "Nope"}</p>
                </div>
            </div>
        );
    }
}