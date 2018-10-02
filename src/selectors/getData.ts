import { Map } from 'immutable';
import { $ } from './constants';

export const getData = (state: any): any => {

    const select = (map: Map<string, any>): {} => {

        const result = {};

        map.forEach((v, k) => {
            if (k !== $) {
                if (Map.isMap(v)) {
                    const n = select(v);
                    if (n !== undefined) {
                        result[k as string] = n;
                    }
                } else {
                    result[k as string] = typeof(v.toJSON) === 'function' ? v.toJSON() : v;
                }
            }
        });

        return result;
    };

    return select(state);
};