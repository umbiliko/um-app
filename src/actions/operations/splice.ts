import { SPLICE } from './types';
import { Actions } from './typings';

export default (path: string, start: number, items: any[], remove?: number): Actions[typeof SPLICE] => ({
    payload: {
        deleteCount: remove || 0,
        items,
        path,
        start,
    },
    type: SPLICE
});