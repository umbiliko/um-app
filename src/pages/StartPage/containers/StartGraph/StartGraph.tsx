import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as d3 from 'd3';
import { Link, Node, StartData } from 'um-ts';
import {
    InteractiveForceGraph,
    ForceGraphNode,
    ForceGraphLink,
} from '../../../../containers/ForceGraph';

function attachEvents(child) {
    return React.cloneElement(child, {
        onMouseDown: console.log(`clicked <${child.type.name} />`),
        onMouseOver: console.log(`hovered <${child.type.name} />`),
        onMouseOut: console.log(`blurred <${child.type.name} />`),
    });
}

const scaleCategory20 = d3.scaleThreshold()
    .domain([0, 1, 2])
    .range(["red", "white", "green"]);

export type StartGraphProps = {
    classes?: any;
};

export class StartGraph extends React.Component<StartGraphProps> {

    static getPropTypes = () => ({
        classes: PropTypes.object.isRequired,
        label: PropTypes.string,
        result: PropTypes.array,
    });

    render() {
        const scale = scaleCategory20;
        const data: StartData = {
            nodes: [],
            links: []
        };


        const renderNodes = () => data.nodes.map((node: Node) => (
            <ForceGraphNode
                key={node.id}
                fill={scale(node.group)}
                node={{ ...node, radius: 5 }}
            />
        )).map(attachEvents);

        const renderLinks = () => data.links.map((link: Link) => (
            <ForceGraphLink
                key={`${link.source}=>${link.target}`}
                link={{ ...link, value: 2 }}
            />
        )).map(attachEvents);

        return (
            <InteractiveForceGraph simulationOptions={{ animate: true }} xmlnsXlink="http://www.w3.org/1999/xlink">
                {renderNodes()}
                {renderLinks()}
            </InteractiveForceGraph>
        );
    }
}