import * as React from 'react';
import Icon from '../icons/UmbilikoIcon';
// TODO: import Typography from '@material-ui/core/Typography';

type UmbilikoProps = {
    animated?: boolean;
    color: any;
};

const styles = {
    icon: {
        height: 36,
        width: 36
    },
    root: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
    text: {
        fontFamily: '\'Ubuntu\', sans-serif',
        fontSize: 45,
        fontWeight: 700,
        marginLeft: 3
    }
};

const Umbiliko = (props: UmbilikoProps) => (
    <div style={styles.root}>
        <Icon color={props.color} style={styles.icon} />
        <span style={{ color: props.color, ...styles.text }}>
            {'mbiliko'}
        </span>
    </div>
);

export default Umbiliko;