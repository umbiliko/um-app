import { PUSH } from './types';
import { Actions } from './typings';

export default (path: string, items: any[]): Actions[typeof PUSH] => ({
    payload: {
        items,
        path
    },
    type: PUSH
});
