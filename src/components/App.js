import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {CssBaseline, withStyles} from '@material-ui/core';
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
    main: {
        margin: theme.spacing.unit * 2,
    }
});

export default withStyles(styles)(App);
