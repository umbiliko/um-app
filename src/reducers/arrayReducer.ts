const ADD = 'ADD';
const APPEND = 'APPEND';
const CLEAR = 'CLEAR';
const POP = 'POP';
const PUSH = 'PUSH';
const REMOVE = 'REMOVE';
const REVERSE = 'REVERSE';
const SHIFT = 'SHIFT';
const SORT = 'SORT';
const SPLICE = 'SPLICE';
const UNSHIFT = 'UNSHIFT';

export const arrayActions = {


};

// https://vincent.billey.me/pure-javascript-immutable-array/
interface ArrayAction<T> {
    ADD: {
        newEntry: T;
        type: typeof ADD;
    };
    APPEND: {
        newEntry: T;
        type: typeof APPEND;
    };
    CLEAR: {
        type: typeof CLEAR;
    };
    POP: {
        type: typeof POP;
    };
    PUSH: {
        newEntry: T;
        type: typeof PUSH;
    };
    REMOVE: {
        index: number;
        type: typeof REMOVE;
    };
    REVERSE: {
        type: typeof REVERSE;
    };
    SHIFT: {
        type: typeof SHIFT;
    };
    SORT: {
        compareFn?: (a: T, b: T) => number;
        type: typeof SORT;
    };
    SPLICE: {
        deleteCount: number;
        items: T[];
        start: number;
        type: typeof SPLICE;
    }
    UNSHIFT: {
        newEntry: T;
        type: typeof UNSHIFT;
    };
}

export default function arrayReducer<T>(
    state: Array<T>,
    action: ArrayAction<T>[keyof ArrayAction<T>]
) {
    switch (action.type) {
        case ADD: return [ ...state, action.newEntry ];
        case APPEND: return [ action.newEntry, ...state ];
        case CLEAR: return [];
        case POP: return state.slice(0, -1);
        case PUSH: return [ ...state, action.newEntry ];
        case REMOVE: return state.slice(0, action.index).concat(state.slice(action.index + 1));
        case REVERSE: return [ ...state ].reverse();
        case SHIFT: return state.slice(1);
        case SORT: return [ ...state ].sort(action.compareFn);
        case SPLICE: return [
            ...state.slice(0, action.start),
            ...action.items,
            ...state.slice(action.start + action.deleteCount)
        ];
        case UNSHIFT: return [ action.newEntry, ...state ];
        default: return state;
    }
}