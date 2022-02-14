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
import Select from './Select';
import RequirementsHoc from './RequirementsHoc';
import RequirementsUtils from '../utils/RequirementsUtils';
import CostsUtils from '../utils/CostsUtils';
import Configuration from '../models/Configuration';
import Enums from '../models/Enums';
import { Features } from '../models/Features';
import { RackDevices } from '../models/RackDevices';

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
            requirements: {},
            optimalCosts: {},
            costs: {},
            includeHosting: false,
        };
    }

    handleFeatureChange = items => {
        const features = Features.filter(feature =>
            items.includes(feature.name)
        );
        const requirements = RequirementsUtils.getFromFeatures(features);
        const optimalCosts = CostsUtils.getOptimalCosts(requirements);

        this.setState({
            selectedFeatures: features,
            requirements,
            optimalCosts,
            costs: optimalCosts,
        });
    };

    handleDrawerItemChange = item => {
        if (item !== DrawerItems.RackDevices) {
            return;
        }

        this.setState(prevState => ({
            includeHosting: !prevState.includeHosting,
        }));
    };

    handleCostChange = (key, value) => {
        this.setState(prevState => ({
            costs: CostsUtils.updateCosts(prevState.optimalCosts, key, value),
        }));
    };

    render() {
        const { classes } = this.props;
        const {
            selectedFeatures,
            requirements,
            costs,
            includeHosting,
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
                                        selected={
                                            item === DrawerItems.Features ||
                                            includeHosting
                                        }
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
                    <Select
                        allItems={Features.filter(feature =>
                            [
                                Enums.FeatureCategories.Users,
                                Enums.FeatureCategories.Enhancement,
                            ].includes(feature.categoryName)
                        )}
                        selectedItems={selectedFeatures}
                        placeholder="Add Feature..."
                        onChange={this.handleFeatureChange}
                    />

                    {includeHosting && (
                        <Select
                            allItems={Object.keys(RackDevices).map(
                                key => RackDevices[key]
                            )}
                            selectedItems={[]}
                            placeholder="Add Rack Device..."
                            onChange={() => {}}
                        />
                    )}

                    <RequirementsHoc
                        requirements={requirements}
                        costs={costs}
                        onCostChange={this.handleCostChange}
                    />
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
