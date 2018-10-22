import * as React from 'react';

type OctaSphereProps = {
    cx: number;
    cy: number;
    r: number;
};

export default ({ r, cx, cy }: OctaSphereProps) => {
    return (
        <circle cx={cx} cy={cy} r={r} />
    )
};