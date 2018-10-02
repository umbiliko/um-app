import { List, Map } from 'immutable';
import { isArray, isNumber, isPlainObject, isString } from 'ts-util-is';
import { IRootState } from 'um-ts';
import { getPath } from './getPath';

export const getIn = (state: IRootState, ownProps: { key: string }) => {
    const { key } = ownProps;
    
    if (!isString(key)) {
        return;
    }

    const path = getPath(key);

    if (!path || !path.length) {
        return;
    }

    let cursor: any = state;

    for (let i = 0; cursor && i < path.length; i++) {
        const { [i]: key } = path;
        
        if (List.isList(cursor)) {
            cursor = cursor.get(key);
            continue;
        }

        if (Map.isMap(cursor)) {
            cursor = cursor.get(key);
            continue;
        }
        
        if (isPlainObject(cursor)) {
            cursor = cursor[key];
            continue;
        }
        
        if (isArray(cursor)) {
            const pos = isNumber(key) ? key : parseInt(key as string);
            cursor = isNumber(pos) ? cursor[pos] : undefined;
            continue;
        }
        
        cursor = undefined;
    }
    
    return cursor;
}