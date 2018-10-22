import * as React from 'react';
import * as PropTypes from 'prop-types';

export const nodePropTypes = PropTypes.shape({
    id: PropTypes.string.isRequired,
    radius: PropTypes.number,
});

export interface INode {
    id: string;
    radius?: number;
}

export type NodeProps = React.SVGProps<SVGCircleElement> & {
    labelClass;
    labelStyle;
    node: INode;
    r?: number;
    showLabel?: boolean;
};

export class Node extends React.PureComponent<NodeProps> {
    static get propTypes() {
        return {
            node: nodePropTypes.isRequired,
            cx: PropTypes.number,
            cy: PropTypes.number,
            r: PropTypes.number,
            className: PropTypes.string,
            // these props only have an impact on the parent.
            labelStyle: PropTypes.object,
            labelClass: PropTypes.string,
            showLabel: PropTypes.bool,
        };
    }

    static get defaultProps() {
        return {
            className: '',
            fill: '#333',
            opacity: 1,
            stroke: '#FFF',
            strokeWidth: 1.5,
        };
    }

    render() {
        const {
            node, className, r,
            /* eslint-disable no-unused-vars */
            labelStyle, labelClass, showLabel,
            /* eslint-enable no-unused-vars */
            ...spreadable
        } = this.props;

        const { radius = 5 } = node;

        return (
            <circle
                className={`rv-force__node ${className}`}
                r={r || radius}
                {...spreadable}
            />
        );
    }
}