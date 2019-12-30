import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {AppBar, CssBaseline, Toolbar, Typography, withStyles} from '@material-ui/core';
import {MoneyOff as AppIcon} from '@material-ui/icons';
import SelectFeature from "./SelectFeature";
import Requirements from "./Requirements";
import RequirementsUtils from '../utils/RequirementsUtils';
import CostsUtils from '../utils/CostsUtils';
import Configuration from '../models/Configuration';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedFeatures: [],
            requirements: {},
            optimalCosts: {},
            costs: {},
        }
    }

    handleFeatureChange = (features) => {
        const requirements = RequirementsUtils.getFromFeatures(features);
        const optimalCosts = CostsUtils.getOptimalCosts(requirements)

        this.setState({
            selectedFeatures: features,
            requirements,
            optimalCosts,
            costs: optimalCosts,
        });
    };

    handleCostChange = (key, value) => {
        this.setState({

        });
    };

    render() {
        const {classes} = this.props;
        const {selectedFeatures, requirements, costs} = this.state;

        return (
            <Fragment>
                <CssBaseline/>

                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <AppIcon className={classes.icon}/>
                        <Typography variant="h6" className={classes.title} noWrap>
                            Startup Company Calculator 
                        </Typography>
                        <div className={classes.version}>
                            <Typography color='inherit'>
                                Game Version: {Configuration.BETA_VERSION}.{Configuration.BETA_SUBVERSION}
                            </Typography>
                        </div>
                    </Toolbar>
                </AppBar>

                <main className={classes.main}>
                    <SelectFeature
                        selectedFeatures={selectedFeatures}
                        onChange={this.handleFeatureChange}
                    />

                    <Requirements
                        requirements={requirements}
                        costs={costs}
                    />
                </main>
            </Fragment>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

const styles = theme => ({
    appBar: {
        position: 'relative',
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
    }
});

export default withStyles(styles)(App);
