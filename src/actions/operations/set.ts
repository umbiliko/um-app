import { SET } from './types';
import { Actions } from './typings';

export default (path: string, value?: any): Actions[typeof SET] => ({
    payload: {
        path,
        value
    },
    type: SET
});
