import { useEffect, useReducer } from 'react';
import Movie, { MovieList } from './Movie';
import {number} from "prop-types";

const SHOW_DETAIL = 'SHOW_DETAIL';
const HIDE_DETAIL = 'HIDE_DETAIL';
// const PROGRESS = 'PROGRESS';
const GO_BACKWARD = 'GO_BACKWARD';
const GO_FORWARD = 'GO_FORWARD';
const GO_TO = 'GO_TO';
const LOAD_PAGE = 'LOAD_PAGE';

export interface MovieIndex {
    id: number;
    index: number;
    page: number;
}

export interface MoviewBoxState {
    current: MovieIndex | null;
    history: MovieIndex[];
    index: number | null;
    showDetail: boolean;
}

export interface MovieMoxActions {
    SHOW_DETAIL: {
        type: typeof SHOW_DETAIL;
    };
    HIDE_DETAIL: {
        type: typeof HIDE_DETAIL;
    };
    /*PROGRESS: {
        type: typeof PROGRESS;
    };*/
    GO_BACKWARD: {
        type: typeof GO_BACKWARD;
    };
    GO_FORWARD: {
        type: typeof GO_FORWARD;
    };
    GO_TO: {
        index: number;
        type: typeof GO_TO;
    },
    SET_PAGE: {
        index: number;
        items: MovieList;
        type: typeof LOAD_PAGE;
    }
}

export type MovieBoxAction = MovieMoxActions[keyof MovieMoxActions];

const initialState: MoviewBoxState = {
    current: null,
    history: [],
    index: null,
    showDetail: false
};

export default (page: number, currentId: number, detail: boolean) => {

    const reducer = (state: MoviewBoxState, action: MovieBoxAction): MoviewBoxState => {

        switch (action.type) {
            case HIDE_DETAIL: return {
                ...state,
                showDetail: false
            };
            case GO_BACKWARD: return {
                ...state,
                index: state.index !== null ? (state.index - 1 + state.history.length) % state.history.length : null,
                showDetail: false
            };
            case GO_FORWARD: return {
                ...state,
                index: state.index !== null ? (state.index + 1) % state.history.length : null,
                showDetail: false
            };
            case GO_TO: {
                return {
                    ...state,

                    showDetail: false
                };
            }
            /*case PROGRESS: return {
                ...state,
                currentId: (state.currentId + 1) % length,
                // isPlaying: true,
                // takeFocus: false
            };*/

            case SHOW_DETAIL: return {
                ...state,
                showDetail: true
            };
            default: return state;
        }
    };

    const [state, dispatch] = useReducer<MoviewBoxState, MovieBoxAction>(reducer, initialState);
    const hideDetail = () => dispatch({ type: HIDE_DETAIL });
    const goBackward = () => dispatch({ type: GO_BACKWARD });
    const goForward = () => dispatch({ type: GO_FORWARD });
    const goTo = (index: number) => dispatch({ index, type: GO_TO });
    const showDetail = () => dispatch({ type: SHOW_DETAIL });
    //const progress = () => dispatch({ type: PROGRESS});
    // const setPage = (index: number; items: MovieList) => dispatch({ index, items, type: SET_PAGE });

    useEffect(
        (): EffectResult => {
            //setMovie(movieDetailsJson[id]);

            fetch(`/movies?page=${page}`)
                .then((response: Response): Promise<MovieList> => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                .then((data: MovieList) => setPage(page, data))
                .catch(err => console.log(err));
        },
        [page]
    );

    return {
        goBackward,
        goForward,
        goTo,
        pause: showDetail,
        play: hideDetail,
        state
    };
};
