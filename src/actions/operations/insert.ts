import { SPLICE } from'./types';
import { Actions } from './typings';

export default (path: string, pos: number, items: any[]): Actions[typeof SPLICE] => ({
    payload: {
        deleteCount: 0,
        items,
        path,
        start: pos,
    },
    type: SPLICE
});