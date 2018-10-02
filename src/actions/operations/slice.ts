import { SLICE } from './types';
import { Actions } from './typings';

export default (path: string, start: number, end: number): Actions[typeof SLICE] => ({
    payload: {
        end,
        path,
        start
    },
    type: SLICE
});