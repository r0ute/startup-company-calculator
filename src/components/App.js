import React, { Component, Fragment } from 'react';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';
import {
    AppBar,
    CssBaseline,
    Toolbar,
    Typography,
    withStyles,
} from '@material-ui/core';
import { MoneyOff as AppIcon } from '@material-ui/icons';
import UnitSelect from './UnitSelect';
import RequirementsHoc from './RequirementsHoc';
import RequirementsUtils from '../utils/RequirementsUtils';
import CostsUtils from '../utils/CostsUtils';
import Configuration from '../models/Configuration';
import Enums from '../models/Enums';
import { Features } from '../models/Features';
import { RackDevices } from '../models/RackDevices';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedFeatures: [],
            selectedRackDevices: [],
            requirements: {},
            optimalCosts: {},
            costs: {},
        };
    }

    _updateRequirements = (features, devices) => {
        this.setState(prevState => {
            const requirements = RequirementsUtils.getFromFeaturesAndRackDevices(
                features || prevState.selectedFeatures,
                devices || prevState.selectedRackDevices
            );

            const optimalCosts = CostsUtils.getOptimalCosts(requirements);

            return {
                selectedFeatures: features || prevState.selectedFeatures,
                selectedRackDevices: devices || prevState.selectedRackDevices,
                requirements,
                optimalCosts,
                costs: optimalCosts,
            };
        });
    };

    handleFeatureChange = items => {
        const features = Features.filter(feature =>
            items.includes(feature.name)
        );

        this._updateRequirements(features);

        ReactGA.event({
            category: 'App',
            action: 'Changed Feature',
            label: features.map(feat => feat.name).join(),
        });
    };

    handleRackDeviceChange = items => {
        const devices = Object.keys(RackDevices)
            .map(key => RackDevices[key])
            .filter(device => items.includes(device.name));

        this._updateRequirements(undefined, devices);

        ReactGA.event({
            category: 'App',
            action: 'Changed Rack Device',
            label: devices.map(dev => dev.name).join(),
        });
    };

    handleCostChange = (key, value) => {
        this.setState(prevState => ({
            costs: CostsUtils.updateCosts(prevState.optimalCosts, key, value),
        }));

        ReactGA.event({
            category: 'App',
            action: 'Changed Cost',
            label: key,
            value: value,
        });
    };

    render() {
        const { classes } = this.props;
        const {
            selectedFeatures,
            selectedRackDevices,
            requirements,
            costs,
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

                <main className={classes.main}>
                    <UnitSelect
                        allItems={Features.filter(feature =>
                            [
                                Enums.FeatureCategories.Users,
                                Enums.FeatureCategories.Enhancement,
                            ].includes(feature.categoryName)
                        )}
                        selectedItems={selectedFeatures}
                        faIcon="fa-bullhorn"
                        placeholder="Add Feature..."
                        onChange={this.handleFeatureChange}
                    />

                    <UnitSelect
                        allItems={Object.keys(RackDevices).map(
                            key => RackDevices[key]
                        )}
                        selectedItems={selectedRackDevices}
                        faIcon="fa-server"
                        placeholder="Add Rack Device..."
                        onChange={this.handleRackDeviceChange}
                    />

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
    main: {
        margin: theme.spacing.unit * 2,
    },
});

export default withStyles(styles)(App);
