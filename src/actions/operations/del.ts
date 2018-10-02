import { DELETE } from'./types';
import { Actions } from './typings';

export default (path: string): Actions[typeof DELETE] => ({
    payload: {
        path
    },
    type: DELETE
});