import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
    AppBar,
    CssBaseline,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    Toolbar,
    Typography,
    withStyles,
} from '@material-ui/core';
import { MoneyOff as AppIcon } from '@material-ui/icons';
import Features from './features/Features';
import RackDevices from './rack-devices/RackDevices';
import RequirementsUtils from '../utils/RequirementsUtils';
import CostsUtils from '../utils/CostsUtils';
import Configuration from '../models/Configuration';

const DrawerItems = {
    Features: {
        name: 'Features',
        faIcon: 'fa-bullhorn',
    },
    RackDevices: {
        name: 'Hosting',
        faIcon: 'fa-server',
    },
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedFeatures: [],
            featureRequirements: {},
            featureOptimalCosts: {},
            featureCosts: {},
            selectedDrawerItem: DrawerItems.Features,
        };
    }

    handleFeatureChange = features => {
        const requirements = RequirementsUtils.getFromFeatures(features);
        const optimalCosts = CostsUtils.getOptimalCosts(requirements);

        this.setState({
            selectedFeatures: features,
            featureRequirements: requirements,
            featureOptimalCosts: optimalCosts,
            featureCosts: optimalCosts,
        });
    };

    handleDrawerItemChange = item => {
        this.setState({
            selectedDrawerItem: item,
        });
    };

    handleCostChange = (key, value) => {
        this.setState(prevState => ({
            featureCosts: CostsUtils.updateCosts(
                prevState.featureOptimalCosts,
                key,
                value
            ),
        }));
    };

    render() {
        const { classes } = this.props;
        const {
            selectedFeatures,
            featureRequirements,
            featureCosts,
            selectedDrawerItem,
        } = this.state;

        return (
            <Fragment>
                <CssBaseline />

                <AppBar position="sticky" className={classes.appBar}>
                    <Toolbar>
                        <AppIcon className={classes.icon} />
                        <Typography
                            variant="h6"
                            className={classes.title}
                            noWrap
                        >
                            Startup Company Calculator
                        </Typography>
                        <div className={classes.version}>
                            <Typography color="inherit">
                                Game Version: {Configuration.VERSION}.
                                {Configuration.SUBVERSION}
                            </Typography>
                        </div>
                    </Toolbar>
                </AppBar>

                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Toolbar />
                    <div className={classes.drawerContainer}>
                        <List className={classes.list}>
                            {Object.keys(DrawerItems)
                                .map(key => DrawerItems[key])
                                .map(item => (
                                    <ListItem
                                        button
                                        key={item.name}
                                        selected={selectedDrawerItem === item}
                                        onClick={() =>
                                            this.handleDrawerItemChange(item)
                                        }
                                    >
                                        <ListItemIcon>
                                            <i
                                                className={`fa ${item.faIcon}`}
                                            ></i>
                                        </ListItemIcon>
                                    </ListItem>
                                ))}
                        </List>
                    </div>
                </Drawer>

                <main className={classes.main}>
                    {selectedDrawerItem === DrawerItems.Features && (
                        <Features
                            selectedFeatures={selectedFeatures}
                            requirements={featureRequirements}
                            costs={featureCosts}
                            onFeatureChange={this.handleFeatureChange}
                            onCostChange={this.handleCostChange}
                        />
                    )}

                    {selectedDrawerItem === DrawerItems.RackDevices && (
                        <RackDevices foo={{}} />
                    )}
                </main>
            </Fragment>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    icon: {
        marginLeft: -theme.spacing.unit * 1.5,
        marginRight: theme.spacing.unit * 3.5,
    },
    title: {
        color: 'inherit',
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    version: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: 1,
            width: 'auto',
        },
    },
    drawer: {
        width: theme.spacing.unit * 6,
        flexShrink: 0,
        overflowX: 'hidden',
    },
    drawerPaper: {
        width: theme.spacing.unit * 6,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    list: {
        marginTop: theme.spacing.unit * 0.75,
    },
    main: {
        margin: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 8,
    },
});

export default withStyles(styles)(App);
