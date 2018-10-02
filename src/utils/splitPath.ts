import { $, separator } from '../selectors/constants';
import { flatten } from './flatten';
import { path } from 'um-ts';

export function splitPath(path: string): path {
    const seg = path
        .split($)
        .map(p => p.split(separator).filter(t => t.length > 0));

    switch (seg.length) {
        case 1:
            return seg[0];
        case 2:
            return [...seg[0], $, ...seg[1]];
        case 3:
            return [...seg[0], $, ...seg[1], $, ...seg[2]];
        default:
            return [...seg[0], $, ...seg[1], $, ...flatten(seg.splice(2))];
    }
}