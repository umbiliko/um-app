import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default (props?: SvgIconProps) => (
    <SvgIcon
        viewBox="0.0 7.0 255.0 255.0"
        fill="none"
        stroke="none"
        strokeLinecap="square"
        {...props}
    >
        <g
            fill={props && props.color}
        >
            <path
                d="M0 7L0 127.5A127.5 127.5 0 0 0 255 127.5L255 0L192 7L192 127.5A47.5 47.5 0 0 1 63 127.5L63 0L0 7Z"
            />
            <circle cx="127.5" cy="127.5" r="31.5" />
        </g>
    </SvgIcon>
);