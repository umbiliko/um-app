import * as React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
  progress: {
    height: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2
  }
});

export type StartMenuProps = {
    classes;
    label;
    result;
};

export class StartMenu extends React.Component<StartMenuProps> {
    
    static getPropTypes = () => ({
        classes: PropTypes.object.isRequired,
        label: PropTypes.string,
        result: PropTypes.array,
    });
    
    render() {
        const { classes, label, result } = this.props;

        const renderItems = () => result.map((item, i) => (
            <Grid item={true} xs={3}>
                <a key={i} href={item.href}>{item.label}</a>
            </Grid>
        ));

        return !result ? (<LinearProgress className={classes.progress} />) : [
            label && <Typography key="label" className={classes.typography}>{label}</Typography>,
            (
                <Grid key="grid" container={true} spacing={16}>  
                    {renderItems()}
                </Grid>
            )
        ];
    }
}

export default withStyles(styles)(StartMenu);