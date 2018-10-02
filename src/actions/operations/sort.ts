import { SORT } from './types';
import { Actions } from './typings';

export default (path: string): Actions[typeof SORT] => ({
    payload: {
        path
    },
    type: SORT
});