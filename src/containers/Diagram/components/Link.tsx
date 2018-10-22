import * as React from 'react';
import * as PropTypes from 'prop-types';

export const linkPropTypes = PropTypes.shape({
    source: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    value: PropTypes.number,
});

export interface ILink {
    source: string;
    target: string;
    value: number;
}

export type LinkProps = React.SVGProps<SVGLineElement> & {
    link: ILink;
    // strokeWidth;
    // className;
    edgeOffset;
    x1: number;
    x2: number;
    y1: number;
    y2: number;
};

export class Link extends React.PureComponent<LinkProps> {

    static get propTypes() {
        return {
            link: linkPropTypes.isRequired,
            edgeOffset: PropTypes.number,
            strokeWidth: PropTypes.number,
            className: PropTypes.string,
        };
    }

    static get defaultProps() {
        return {
            className: '',
            opacity: 0.6,
            stroke: '#999',
            edgeOffset: 0,
        };
    }

    render() {
        const { link, strokeWidth, className, edgeOffset, ...spreadable } = this.props;

        if (typeof edgeOffset === 'number') {
            const { x1, x2, y1, y2 } = spreadable;
            const xLen = x1 + x2;
            const yLen = y1 + y2;
            const length = Math.sqrt(Math.pow(xLen, 2) + Math.pow(yLen, 2));
            const offsetFactor = edgeOffset / length;
            const xOffset = offsetFactor * xLen;
            const yOffset = offsetFactor * yLen;

            if (x1 > x2) {
                spreadable.x1 -= xOffset;
                spreadable.x2 += xOffset;
            } else if (x1 < x2) {
                spreadable.x1 += xOffset;
                spreadable.x2 -= xOffset;
            }

            if (y1 > y2) {
                spreadable.y1 -= yOffset;
                spreadable.y2 += yOffset;
            } else if (y1 < y2) {
                spreadable.y1 += yOffset;
                spreadable.y2 -= yOffset;
            }
        }

        return (
            <line
                className={`rv-force__link ${className}`}
                strokeWidth={strokeWidth || Math.sqrt(link.value)}
                {...spreadable}
            />
        );
    }
}