import { useEffect, useReducer } from 'react';

const PAUSE = 'PAUSE';
const PLAY = 'PLAY';
const PROGRESS = 'PROGRESS';
const GO_BACKWARD = 'GO_BACKWARD';
const GO_FOREWARD = 'GO_FORWARD';
const GO_TO = 'GO_TO';

export interface CarouselState {
    currentIndex: number;
    isPlaying: boolean;
}

export interface CarouselAction {
    PAUSE: {
        type: typeof PAUSE;
    };
    PLAY: {
        type: typeof PLAY;
    };
    PROGRESS: {
        type: typeof PROGRESS;
    };
    GO_BACKWARD: {
        type: typeof GO_BACKWARD;
    };
    GO_FORWARD: {
        type: typeof GO_FOREWARD;
    };
    GO_TO: {
        index: number;
        type: typeof GO_TO;
    }
}

const initialState: CarouselState = {
    currentIndex: 0,
    isPlaying: false
};

function useCarousel(length: number, duration: number) {

    const reducer = (state: CarouselState, action: CarouselAction[keyof CarouselAction]): CarouselState => {
        switch (action.type) {
            case PAUSE: return {
                ...state,
                isPlaying: false
            };
            case PLAY: return {
                ...state,
                isPlaying: true
            };
            case PROGRESS: return {
                ...state,
                currentIndex: (state.currentIndex + 1) % length,
                isPlaying: true
            };
            case GO_BACKWARD: return {
                ...state,
                currentIndex: (state.currentIndex - 1) % length,
                isPlaying: false
            };
            case GO_FOREWARD: return {
                ...state,
                currentIndex: (state.currentIndex + 1) % length,
                isPlaying: false
            };
            case GO_TO: return {
                ...state,
                currentIndex: action.index,
                isPlaying: false
            };
            default: return state;
        }
    };

    const [state, dispatch] = useReducer<CarouselState>(reducer, initialState);
    const pause = () => dispatch({ type: PAUSE });
    const play = () => dispatch({ type: PLAY });
    const goBackward = () => dispatch({ type: GO_BACKWARD });
    const goForeward = () => dispatch({ type: GO_FOREWARD });
    const goTo = () => dispatch({ type: GO_TO });

    useEffect((): (() => void) | void => {
        if (state.isPlaying) {
            const timeout = setTimeout(() => {
                dispatch({ type: PROGRESS });
            }, duration);

            return () => clearTimeout(timeout);
        }
    });

    return {
        pause,
        play,
        goBackward,
        goForeward,
        goTo,
        state
    };
}

export default useCarousel;