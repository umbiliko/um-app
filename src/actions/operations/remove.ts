import { SPLICE } from './types';
import { Actions } from './typings';

export default (path: string, start: number, count: number): Actions[typeof SPLICE] => ({
    payload: {
        deleteCount: count || 0,
        items: [],
        path,
        start,
    },
    type: SPLICE
});