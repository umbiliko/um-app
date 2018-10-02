import { Map } from 'immutable';
import { $ } from './constants';
import { getData } from './getData';

export const getMetadata = (state: any): any => {

    const select = (map: Map<string, any>): {} | undefined => {

        let result: object | undefined;

        map.forEach((v, k) => {
            if (k === $) {
                result = result || {};
                if (Map.isMap(v)) {
                    result[$] = getData(v);
                } else if (typeof (v.toJSON) === 'function') {
                    result[$] = v.toJSON();
                } else {
                    result[$] = v;
                }
            } else if (Map.isMap(v)) {
                const n = select(v);
                if (n !== undefined) {
                    result = result || {};
                    result[k as string] = n;
                }
            }
        });

        return result;
    };

    return select(state);
};