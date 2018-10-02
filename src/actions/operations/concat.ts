import { CONCAT } from './types';
import { Actions } from './typings';

export default (path: string, items: any[]): Actions[typeof CONCAT] => ({
    payload: {
        items,
        path
    },
    type: CONCAT,
});
