import { useState } from 'react';

interface Action {
    type: string;
}

export default function useReducer<S>(reducer: (state: S, action: Action) => S, initialState: S) {
    const [state, setState] = useState(initialState);

    function dispatch(action: Action) {
        const nextState = reducer(state, action);
        setState(nextState);
    }

    return [state, dispatch];
}