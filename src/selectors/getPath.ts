import { $, separator } from './constants';
import { path } from 'um-ts';
import { flatten } from '../utils/flatten';

export const getPath = (selector: string): path => {

    if (typeof (selector) === 'string') {
        const seg = selector
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

    return selector;
};