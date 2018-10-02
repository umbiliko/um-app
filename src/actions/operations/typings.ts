import { CONCAT, DEC, DELETE, INC, MERGE, PUSH, REMOVE, REVERSE, SET, SHIFT, SLICE, SORT, SPLICE, UNSHIFT } from './types';

interface IPayload {
    path: string;
}

interface IAmount {
    amount: number;
}

interface IItems {
    items: any[];
}

interface IValue {
    value: any;
}

export type Actions = {
    CONCAT: {
        payload: IPayload & IItems;
        type: typeof CONCAT;
    },
    DEC: {
        payload: IPayload & IAmount;
        type: typeof DEC;
    },
    DELETE: {
        payload: IPayload;
        type: typeof DELETE;
    },
    INC: {
        payload: IPayload & IAmount;
        type: typeof INC;
    },
    MERGE: {
        payload: IPayload & IValue;
        type: typeof MERGE;
    },
    PUSH: {
        payload: IPayload & IItems;
        type: typeof PUSH;
    },
    REMOVE: {
        payload: IPayload;
        type: typeof REMOVE;
    },
    REVERSE: {
        payload: IPayload;
        type: typeof REVERSE;
    },
    SET: {
        payload: IPayload & IValue;
        type: typeof SET
    },
    SHIFT: {
        payload: IPayload;
        type: typeof SHIFT;
    },
    SLICE: {
        payload: IPayload & {
            end?: number;
            start?: number;
        };
        type: typeof SLICE;
    },
    SORT: {
        payload: IPayload;
        type: typeof SORT;
    },
    SPLICE: {
        payload: IPayload & IItems & {
            deleteCount: number;
            start: number;
        };
        type: typeof SPLICE;
    },
    UNSHIFT: {
        payload: IPayload & IItems;
        type: typeof UNSHIFT;
    }
};