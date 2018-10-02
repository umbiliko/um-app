import { MERGE } from './types';
import {Actions } from './typings';

export default (path: string, value?: any): Actions[typeof MERGE] => ({
    payload: {
        path,
        value
    },
    type: MERGE
});
