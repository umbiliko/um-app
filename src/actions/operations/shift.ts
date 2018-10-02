import { SHIFT } from './types';
import { Actions } from './typings';

export default (path: string): Actions[typeof SHIFT] => ({
    payload: {
        path
    },
    type: SHIFT
});