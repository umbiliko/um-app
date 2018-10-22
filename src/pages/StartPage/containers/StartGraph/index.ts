import { withStyles } from '@material-ui/core/styles';
import { StartGraph } from './StartGraph';

const styles = theme => ({
    progress: {
        height: theme.spacing.unit * 2,
        margin: theme.spacing.unit * 2
    }
});

export default withStyles(styles)(StartGraph);