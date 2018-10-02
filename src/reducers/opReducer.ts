import { fromJS, List, Map } from 'immutable';
import { CONCAT, DEC, DELETE, INC, /*MERGE,*/ PUSH, REMOVE, REVERSE, SET, SHIFT, SLICE, /*SORT,*/ SPLICE, UNSHIFT } from '../actions/operations/types';
import { Actions } from '../actions/operations/typings';
import { splitPath } from '../utils/splitPath';
// import { comparator, mergeDeepConcatUniqueArrays as merge } from './utils';

// const compare = comparator({ desc: false, ignoreCase: false });

export function apply(state: Map<string, any>, action: Actions[keyof Actions]): Map<string, any> {
    const path = splitPath(action.payload.path);
    
    switch (action.type) {
        case CONCAT:
            return state.updateIn(path, (list: List<any>) => list.concat(...action.payload.items));
        case DEC:
            return state.updateIn(path, (value: number) => value - action.payload.amount);
        case DELETE:
            return state.deleteIn(path);
        case INC:
            return state.updateIn(path, (value: number) => value + action.payload.amount);
        /*case MERGE: {
            const current = state.getIn(path);
            const next = current ? merge(current, action.value) : action.value;
            return state.setIn(path, next);
        }*/
        case PUSH:
            return state.updateIn(path, (list: List<any>) => list.push(...action.payload.items));
        case REMOVE:
            return state.removeIn(path);
        case REVERSE:
            return state.updateIn(path, (list: List<any>) => list.reverse());
        case SET:
            return state.setIn(path, fromJS(action.payload.value));
        case SHIFT:
            return state.updateIn(path, (list: List<any>) => list.shift());
        case SLICE:
            return state.updateIn(path, (list: List<any>) => list.slice(action.payload.start, action.payload.end));
        /*case SORT:
            return state.updateIn(path, (list: List<any>) => list.sort(compare));*/
        case SPLICE:
            return state.updateIn(path, (list: List<any>) =>
                list.splice(action.payload.start, action.payload.deleteCount, ...action.payload.items));
        case UNSHIFT:
            return state.updateIn(path, (list: List<any>) => list.unshift(...action.payload.items));
        default:
            return state;
    }
}

