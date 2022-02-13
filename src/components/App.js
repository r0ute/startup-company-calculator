import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
    AppBar,
    CssBaseline,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    withStyles,
} from '@material-ui/core';
import { MoneyOff as AppIcon } from '@material-ui/icons';
import Features from './features/Features';
import RequirementsUtils from '../utils/RequirementsUtils';
import CostsUtils from '../utils/CostsUtils';
import Configuration from '../models/Configuration';

const DrawerItems = [
    {
        id: 'Features',
        name: 'Features',
        faIcon: 'fa-bullhorn',
    },
    {
        id: 'RackDevices',
        name: 'Hosting',
        faIcon: 'fa-server',
    },
];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedFeatures: [],
            featureRequirements: {},
            featureOptimalCosts: {},
            featureCosts: {},
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
                        <List>
                            {DrawerItems.map(item => (
                                <ListItem button key={item.id}>
                                    <ListItemIcon>
                                        <i className={`fa ${item.faIcon}`}></i>
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Drawer>

                <main className={classes.main}>
                    <Features
                        selectedFeatures={selectedFeatures}
                        requirements={featureRequirements}
                        costs={featureCosts}
                        onFeatureChange={this.handleFeatureChange}
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
        marginRight: theme.spacing.unit * 2,
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
        width: theme.spacing.unit * 24,
        flexShrink: 0,
        overflowX: 'hidden',
    },
    drawerPaper: {
        width: theme.spacing.unit * 24,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    main: {
        margin: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 26,
    },
});

export default withStyles(styles)(App);
