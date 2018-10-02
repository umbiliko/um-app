import { UNSHIFT } from './types';
import { Actions } from './typings';

export default (path: string, items: any[]): Actions[typeof UNSHIFT] => ({
    payload: {
        items,
        path
    },
    type: UNSHIFT
});