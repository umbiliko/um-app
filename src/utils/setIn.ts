import { List, Map } from 'immutable';
import { isArray, isBoolean, isNull, isNumber, isPlainObject, isString, isUndefined } from 'ts-util-is';
import { getPath } from '../selectors/getPath';

export const setIn = (state: object, selector: string, value: any) => {
    if (!isString(selector)) {
        return;
    }

    const path = getPath(selector);
    
    if (!path || !path.length) {
        return;
    }

    let node: any = state;
    const stack: Array<any> = [];
    let error = false;

    for (let i = 0; node && i < path.length; i++) {
        const { [i]: key } = path;

        if (Map.isMap(node)) {
            node = node.setIn(path.slice(i), value);
            stack.push({ node });
            break;
        }

        if (List.isList(node)) {
            node = node.setIn(path.slice(i), value);
            stack.push({ node });
            break;
        }
        
        if (isPlainObject(node)) {
            stack.push({ key, node });
            node = node[key];
            if (!isUndefined(node) && !isNull(node) && !isString(node) && !isNumber(node) && !isBoolean(node)) {
                continue;
            }
            if (i + 1 === path.length) {
                stack.push(node);
            } else {
                error = true;
            }
            break;
        }
        
        if (isArray(node)) {
            const pos = isNumber(key) ? key : parseInt(key as string);
            if (!isNumber(pos)) {
                error = true;
                break;
            }
            stack.push({ pos, node });
            node = node[pos];
            continue;
        }

        error = true;
        break;
    }

    if (error) {
        console.log('error');
        return state;
    }

    return merge(stack);
}

function merge(stack) {
    let { node } = stack.pop();
    let next = node;

    while (next && stack.length) {
        const { key, pos, node } = stack.pop();
        if (isArray(node)) {
            const val = next;
            next = [ ...node ];
            next[pos] = val;
        } else if (isPlainObject(node)) {
            next = { ...node, [key]: next };
        }
    }

    return next;
}