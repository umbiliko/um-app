import { REVERSE } from './types';
import { Actions } from './typings';

export default (path: string): Actions[typeof REVERSE] => ({
    payload: {
        path
    },
    type: REVERSE
});