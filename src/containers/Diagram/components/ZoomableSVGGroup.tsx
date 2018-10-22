import * as React from 'react';
import * as PropTypes from 'prop-types';
import { MouseEvent } from 'react';

export const ZOOMABLE_SVG_GROUP_EVENT_NAMES = [
    'onMouseDown',
    'onMouseMove',
    'onMouseUp',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onWheel',
];

const DEFAULT_MATRIX = [1, 0, 0, 1, 0, 0];

const matrixToArray = (m: SVGMatrix | null | undefined): Array<number> => m ? [m.a, m.b, m.c, m.d, m.e, m.f] : [...DEFAULT_MATRIX];

type Func = () => void;

export type ZoomableSVGGroupProps = React.SVGProps<SVGGElement> & {
    canvasHeight: number;
    canvasWidth: number;
    disabled: boolean;
    height: number;
    maxScale: number;
    minScale: number;
    onMouseDown: Func;
    onMouseMove: Func;
    onMouseUp: Func;
    onPan: (event: React.MouseEvent | undefined, paxX: number, panY: number) => void;
    onTouchCancel: Func;
    onTouchEnd: Func;
    onTouchMove: Func;
    onTouchStart: Func;
    onWheel: Func;
    onZoom: (event: React.MouseEvent | undefined, scale: number) => void;
    panLimit: number;
    zoomSpeed: number;
    width: number;
};

type ZoomableSVGGroupState = {
    dragging?: boolean;
    dragX?: number | null;
    dragY?: number | null;
    matrix: Array<number>;
    pinchLength?: number | null;
    scale: number;
    touching?: boolean;
};

/**
 * This component draws upon the patterns in https://github.com/anvaka/panzoom
 * and applies them to a simple React component that can wrap SVG children.
 */
export class ZoomableSVGGroup extends React.PureComponent<ZoomableSVGGroupProps, ZoomableSVGGroupState> {
    static get propTypes() {
        return {
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired,
            disabled: PropTypes.bool,
            zoomSpeed: PropTypes.number,
            minScale: PropTypes.number,
            maxScale: PropTypes.number,
            panLimit: PropTypes.number,
            onZoom: PropTypes.func,
            onPan: PropTypes.func,
            ...ZOOMABLE_SVG_GROUP_EVENT_NAMES.reduce((obj, eventName) => ({
                ...obj,
                [eventName]: PropTypes.func,
            }), {}),
        };
    }

    static get defaultProps() {
        return {
            disabled: false,
            // scale up or down at 6.5% of the previous size
            zoomSpeed: 0.065,
            // only pan to 75% of the width or height
            panLimit: 0.75,
            // no limit to scale
            minScale: 0,
            maxScale: Infinity,
            onZoom() { },
            onPan() { },
            ...ZOOMABLE_SVG_GROUP_EVENT_NAMES.reduce((obj: object, eventName: string) => ({
                ...obj,
                [eventName]() { },
            }), {}),
        };
    }

    /**
     * given a matrix, return a boolean to indicate if it's valid for
     * use as a transform.
     * @param {array} matrix
     * @return {boolean} is a valid matrix
     */
    static isValidMatrix(matrix) {
        return matrix.length === 6 &&
            matrix.findIndex(item => typeof item !== 'number') === -1;
    }

    // based on the method of the same name from panzoom
    // https://github.com/anvaka/panzoom/blob/master/index.js/#L201-L204
    /* eslint-disable no-mixed-operators */
    static getPinchZoomLength(finger1, finger2) {
        return (finger1.clientX - finger2.clientX) *
            (finger1.clientX - finger2.clientX) +
            (finger1.clientY - finger2.clientY) *
            (finger1.clientY - finger2.clientY);
    }
    /* eslint-enable no-mixed-operators */

    static getTouchClientValues(event) {
        if (event.touches.length >= 2) {
            return {
                clientX: (event.touches[0].clientX + event.touches[1].clientX) / 2,
                clientY: (event.touches[0].clientY + event.touches[1].clientY) / 2,
            };
        }

        return event.touches[0];
    }

    el: SVGGElement | null = null;

    constructor(props) {
        super(props);

        this.state = {
            matrix: [...DEFAULT_MATRIX],
            scale: 1
        };
    }

    componentDidMount() {
        this.setInitialMatrix();
    }

    onMouseDown(event) {
        if (this.state.touching) {
            event.stopPropagation();
            return null;
        }

        // ignore non-left buttons.
        if (event.button !== 0) {
            return null;
        }

        return this.setState({
            dragging: true,
            dragX: event.clientX,
            dragY: event.clientY,
        });
    }

    onMouseMove(event) {
        if (this.state.touching) {
            event.stopPropagation();
            return null;
        }

        if (!this.state.dragging) {
            return event;
        }

        return this.panBy(event.clientX, event.clientY);
    }

    onMouseUp(event) {
        if (this.state.touching) {
            event.stopPropagation();
            return null;
        }

        return this.setState({
            dragging: false,
            dragX: null,
            dragY: null,
        });
    }

    onTouchCancel() {
        this.setState({
            touching: false,
            dragging: false,
            pinchLength: null,
            dragX: null,
            dragY: null,
        });
    }

    onTouchEnd() {
        this.onTouchCancel();
    }

    onTouchMove(event) {
        event.preventDefault();

        if (event.touches.length >= 2) {
            const finger1 = event.touches[0];
            const finger2 = event.touches[1];
            const pinchLength = ZoomableSVGGroup.getPinchZoomLength(finger1, finger2);
            const prevPinchLength = this.state.pinchLength;

            let delta = 0;
            if (pinchLength < (prevPinchLength || 0)) {
                delta = 1;
            } else if (pinchLength > (prevPinchLength || 0)) {
                delta = -1;
            }

            // use the midpoint between the fingers as the zoom origin
            const { clientX, clientY } = ZoomableSVGGroup.getTouchClientValues(event);
            const scaleMultiplier = this.getScaleMultiplier(delta);

            this.zoomTo(clientX, clientY, scaleMultiplier, event);
            this.setState({ pinchLength });
        } else {
            this.panBy(event.touches[0].clientX, event.touches[0].clientY);
        }
    }

    onTouchStart(event) {
        const { clientX: dragX, clientY: dragY } = ZoomableSVGGroup.getTouchClientValues(event);

        this.setState({
            touching: true,
            pinchLength: 0,
            dragX,
            dragY,
        });
    }

    onWheel(event) {
        const { clientX, clientY, deltaY } = event;
        const scaleMultiplier = this.getScaleMultiplier(deltaY);

        if (scaleMultiplier !== 1) {
            event.preventDefault();
            this.zoomTo(clientX, clientY, scaleMultiplier, event);
        }
    }

    setInitialMatrix() {
        const parentSvg: SVGSVGElement | null = this.el && this.el.ownerSVGElement;
        const transform: SVGTransform | null = parentSvg && parentSvg.createSVGTransform();
        const matrix: SVGMatrix | null = transform && transform.matrix;
        
        this.setState({
            scale: 1,
            matrix: matrixToArray(matrix) 
        });
    }

    // based on the method of the same name from panzoom
    // https://github.com/anvaka/panzoom/blob/master/index.js
    getScaleMultiplier(delta) {
        const { zoomSpeed } = this.props;

        if (delta > 0) {
            return 1 - zoomSpeed;
        } else if (delta < 0) {
            return 1 + zoomSpeed;
        }

        return 1;
    }

    // based on the zoomTo method from the panzoom project
    // https://github.com/anvaka/panzoom/blob/master/lib/zoomTo.js
    zoomTo(clientX, clientY, scaleMultiplier, event: MouseEvent | undefined = undefined) {
        const prevMatrix = this.state.matrix;
        const prevScale = this.state.scale;
        const scale = prevScale * scaleMultiplier;
        const clientMatrix = (this.el && this.el.ownerSVGElement && this.el.ownerSVGElement.getScreenCTM()) || { a: 1, d: 1, e: 0, f: 0 };

        const x = (clientX * clientMatrix.a) - clientMatrix.e;
        const y = (clientY * clientMatrix.d) - clientMatrix.f;

        // guardrails for scale max and min
        if (scale > this.props.maxScale || scale < this.props.minScale) {
            return;
        }

        this.setState({
            scale,
            matrix: [
                scale,
                prevMatrix[1],
                prevMatrix[2],
                scale,
                x - (scaleMultiplier * (x - prevMatrix[4])),
                y - (scaleMultiplier * (y - prevMatrix[5])),
            ],
        }, () => this.props.onZoom(event, scale));
    }

    panBy(clientX, clientY, event: MouseEvent | undefined = undefined) {
        const { width, height, panLimit } = this.props;
        const {
            matrix: prevMatrix,
            dragX: prevDragX,
            dragY: prevDragY,
            scale,
        } = this.state;

        const dx = clientX - (prevDragX || 0);
        const dy = clientY - (prevDragY || 0);
        const newX = prevMatrix[4] + dx;
        const newY = prevMatrix[5] + dy;

        // check that we aren't passing the panLimit
        // TODO this feels a little janky in practice
        // This doesn't work well for data that exceeds the canvas size. The limit
        // here assumes the data fits in side of the canvas at scale >= 1. Ideally,
        // the pan limit would hault at (width|height / 2) + border node position.
        // It is probably better to have unlimited panning than to prematurely block
        // panning and hide data.

        if (
            (Math.abs(newX / scale)) > (width * panLimit) ||
            (Math.abs(newY / scale)) > (height * panLimit)
        ) {
            return;
        }

        this.setState({
            dragX: clientX,
            dragY: clientY,
            matrix: [
                prevMatrix[0],
                prevMatrix[1],
                prevMatrix[2],
                prevMatrix[3],
                newX,
                newY,
            ],
        }, () => this.props.onPan(event, newX, newY));
    }

    render() {
        const {
            width,
            height,
            children,
            disabled,
            style = {},
            transform = '',
            // omit these from the passthrough
            /* eslint-disable no-unused-vars */
            canvasHeight, canvasWidth, minScale,
            maxScale, panLimit, onZoom, onPan, zoomSpeed,
            /* esline-enable no-unused-vars */
            ...passthrough
        } = this.props;
        const { matrix, scale } = this.state;

        const eventHandler = eventName => (...args) => {
            this[eventName](...args);
            this.props[eventName](...args);
        };

        const zoomProps = { transform };

        if (!disabled && ZoomableSVGGroup.isValidMatrix(matrix)) {
            Object.assign(zoomProps, {
                ...ZOOMABLE_SVG_GROUP_EVENT_NAMES.reduce((obj, eventName) => ({
                    ...obj,
                    [eventName]: eventHandler(eventName),
                }), {}),
                style: Object.assign({}, style, {
                    transformOrigin: '0 0 0',
                    cursor: 'default',
                    pointerEvents: 'all',
                }),
                transform: `matrix(${matrix.join(' ')}) ${transform}`,
            });
        }

        return (
            <g ref={g => { this.el = g; }} {...passthrough} {...zoomProps}>
                <rect
                    x={-1 * matrix[4]}
                    y={-1 * matrix[5]}
                    transform={`scale(${1 / scale})`}
                    fillOpacity={0}
                    height={height}
                    width={width}
                />
                {children}
            </g>
        );
    }
}