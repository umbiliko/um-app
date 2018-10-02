import { INC } from './types';
import { Actions } from './typings';

export default (path: string, amount: number): Actions[typeof INC] => ({
    payload: {
        amount,
        path
    },
    type: INC,
});
