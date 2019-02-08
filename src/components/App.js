import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {AppBar, CssBaseline, Toolbar, Typography, withStyles} from '@material-ui/core';
import {MoneyOff as AppIcon} from '@material-ui/icons';
import SelectFeature from "./SelectFeature";
import Requirements from "./Requirements";
import RequirementsUtils from '../utils/RequirementsUtils';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedFeatures: [],
            requirements: {},
        }
    }

    handleFeatureChange = (features) => {
        this.setState({
            selectedFeatures: features,
            requirements: RequirementsUtils.getFromFeatures(features),
        });
    };

    render() {
        const {classes} = this.props;
        const {selectedFeatures, requirements} = this.state;

        return (
            <Fragment>
                <CssBaseline/>

                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <AppIcon className={classes.icon}/>
                        <Typography variant="h6" color="inherit" noWrap>
                            Startup Company Calculator
                        </Typography>
                    </Toolbar>
                </AppBar>

                <main className={classes.main}>
                    <SelectFeature
                        selectedFeatures={selectedFeatures}
                        onChange={this.handleFeatureChange}
                    />

                    <Requirements
                        requirements={requirements}
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
    main: {
        margin: theme.spacing.unit * 2,
    }
});

export default withStyles(styles)(App);
