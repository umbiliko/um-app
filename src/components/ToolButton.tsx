import * as React from 'react';
// import * as PropTypes from 'prop-types';
import { IconProps } from '@material-ui/core/Icon';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

type ToolButtonProps = IconButtonProps & {
    active?: boolean | string;
    value: string;
    label: string;
    icon: React.ComponentType<IconProps | SvgIconProps>;
    onActivate: (value: string) => void;
};

export class ToolButton extends React.PureComponent<ToolButtonProps> {

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { onActivate, value } = this.props;
        onActivate(value);
    }

    render() {
        const { active, label, icon: Icon, onActivate, value, ...spread } = this.props;

        return (
            <Tooltip title={label}>
                <IconButton {...spread} aria-label={label} color={active && active === value ? 'secondary' : 'inherit'} onClick={this.onClick}>
                    <Icon />
                </IconButton>
            </Tooltip>
        );
    }
}