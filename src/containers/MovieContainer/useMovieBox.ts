/// <reference path="../../../typings/global.d.ts" />
/// <reference path="../../../typings/index.d.ts" />
import AbortController from 'abort-controller';
import { useEffect, useReducer, useState } from 'react';
import { MovieItem, MovieList } from './Movie';
import * as React from 'react';

const SHOW_DETAIL = 'SHOW_DETAIL';
const HIDE_DETAIL = 'HIDE_DETAIL';
// const PROGRESS = 'PROGRESS';
const GO_BACKWARD = 'GO_BACKWARD';
const GO_FORWARD = 'GO_FORWARD';
const GO_TO = 'GO_TO';
const TOGGLE_DETAIL = 'TOGGLE_DETAIL';

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
    TOGGLE_DETAIL: {
        type: typeof TOGGLE_DETAIL;
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
            };
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
            case TOGGLE_DETAIL: return {
                ...state,
                showDetail: !state.showDetail
            };

            default: return state;
        }
    };

    const [state, dispatch] = useReducer<MoviewBoxState, MovieBoxAction>(reducer, initialState);
    const [pageCache] = useState(new WeakMap<{ page: number }, MovieList>());
    const [goToCache] = useState(new WeakMap<MovieIndex, { goTo: React.MouseEventHandler }>());
    const hideDetail = () => dispatch({ type: HIDE_DETAIL });
    const goBackward = () => dispatch({ type: GO_BACKWARD });
    const goForward = () => dispatch({ type: GO_FORWARD });
    const goTo = (index: number, page: number) => dispatch({ index, type: GO_TO });
    const showDetail = () => dispatch({ type: SHOW_DETAIL });
    const toggleDetail = () => dispatch({ type: TOGGLE_DETAIL });
    // const setPage = (index: number; items: MovieList) => dispatch({ index, items, type: SET_PAGE });

    useEffect(
        (): EffectResult => {
            if (!pageCache.has({ page })) {

                const controller = new AbortController();
                /*
                controller.signal.addEventListener('abort', () => {
                    console.log('aborted!')
                });
                */
                fetch(
                    `/movies?page=${page}`,
                    {
                        method: 'get',
                        signal: controller.signal;
                    }
                )
                    .then((response: Response): Promise<MovieList> => {
                        if (!response.ok) {
                            throw new Error(response.statusText);
                        }
                        return response.json();
                    })
                    .then((data: MovieList) => pageCache.set({ page }, data))
                    .catch(err => console.log(err));

                return controller.abort;
            }
        },
        [page]
    );

    return {
        hideDetail,
        goBackward,
        goForward,
        goTo,
        items: pageCache.get({ page })!.map((item: MovieItem, index: number) => {
            const key = { id: item.id, index, page };
            if (!goToCache.has(key)) {
                goToCache.set(key, { goTo: () => goTo(index, page) });
            }
            return { ...item, onClick: goToCache.get(key)!.goTo }
        }),
        page,
        showDetail,
        state,
        toggleDetail
    };
};
