import * as React from 'react';
import * as PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Popover, { PopoverOrigin } from '@material-ui/core/Popover';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Top20Icon from '@material-ui/icons/Publish';
import TasksIcon from '@material-ui/icons/ListAlt'; // DoneAll';
import InquiryIcon from '@material-ui/icons/LiveHelp';
import ReportsIcon from '@material-ui/icons/LibraryBooksRounded';
import FavoritesIcon from '@material-ui/icons/Loyalty';
import QuickIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import StartMenu from '../../components/StartMenu';
import { ToolButton } from '../../../../components/ToolButton';

export type StartBarProps = {
    classes: any;
};

type StartBarState = {
    search?: boolean | string;
};

export class StartBar extends React.Component<StartBarProps, StartBarState> {
    anchorEl: HTMLDivElement | null = null;

    static getPropTypes = () => ({
        classes: PropTypes.object.isRequired
    });

    constructor(props) {
        super(props);

        this.state = {
            search: false
        };

        this.handleClose = this.handleClose.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleClickSearchButton = this.handleClickSearchButton.bind(this);
    }

    componentDidMount() {
        //debugger;
        //console.log(this.anchorEl);
    }

    handleClose() {
        this.setState({
            search: false
        });
    }

    handleClickSearchButton(term) {
        this.setState({ search: term });
    }

    handleFocus(ev) {
        ev.target.select();
    }

    handleKeyPress(ev) {
        if (ev.key === 'Enter') {
            this.setState({ search: ev.target.value });
            ev.target.select();
        }
    }
    
    render() {
        const { classes } = this.props;
        const isMenuOpen = false;

        const {
            search
        } = this.state;

        const anchorOrigin: PopoverOrigin = {
            horizontal: 'left',
            vertical: 'bottom'
        };

        const transformOrigin: PopoverOrigin = {
            horizontal: 'center',
            vertical: -8
        };

        const inputClasses = {
            root: classes.inputRoot,
            input: classes.inputInput,
        };

        return (
            <div className={classes.root} ref={node => { this.anchorEl = node; }}>
                <Popover
                    open={!!search}
                    anchorEl={this.anchorEl}
                    anchorReference="anchorEl"
                    onClose={this.handleClose}
                    anchorOrigin={anchorOrigin}
                    transformOrigin={transformOrigin}
                    PaperProps={{ style: { right: 16 } }}
                >
                    <StartMenu label={null} result={null} />
                </Popover>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <div className={classes.sectionDesktop}>
                            <ToolButton active={search} label="Top 20" value="top_20" icon={Top20Icon} onActivate={this.handleClickSearchButton} />
                            <ToolButton active={search} label="Tasks" value="tasks" icon={TasksIcon} onActivate={this.handleClickSearchButton} />
                            <ToolButton active={search} label="Inquiries" value="inquiries" icon={InquiryIcon} onActivate={this.handleClickSearchButton} />
                            <ToolButton active={search} label="Reports &amp; Exports" value="reports" icon={ReportsIcon} onActivate={this.handleClickSearchButton} />
                            <ToolButton active={search} label="Frequently-Used Tables" value="frequent" icon={FavoritesIcon} onActivate={this.handleClickSearchButton} />
                            <ToolButton active={search} label="Seldom-Used Tables" value="seldom" icon={QuickIcon} onActivate={this.handleClickSearchButton} />
                            <ToolButton active={search} label="Settings &amp; Utils" value="settings" icon={SettingsIcon} onActivate={this.handleClickSearchButton} />
                            <IconButton color="inherit">
                                <Badge className={classes.margin} badgeContent={4} color="secondary">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton color="inherit">
                                <Badge className={classes.margin} badgeContent={17} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <Input
                                classes={inputClasses}
                                disableUnderline={true}
                                onFocus={this.handleFocus}
                                onKeyPress={this.handleKeyPress}
                                placeholder="Search..."
                            />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}