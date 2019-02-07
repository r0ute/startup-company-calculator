import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {CssBaseline, withStyles, AppBar, Typography, Toolbar} from '@material-ui/core';
import {Money as ComputerIcon} from '@material-ui/icons';
import SelectFeature from "./SelectFeature";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedFeatures: [],
        }
    }

    handleFeatureChange = (features) => {
        this.setState({
            selectedFeatures: features,
        });

    };


    render() {
        const {classes} = this.props;
        const {selectedFeatures} = this.state;

        return (
            <Fragment>
                <CssBaseline/>

                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <ComputerIcon className={classes.icon} />
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
