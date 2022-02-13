import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import SelectFeature from './SelectFeature';
import RequirementsHoc from './FeatureRequirementsHoc';

class Features extends Component {
    render() {
        const {
            selectedFeatures,
            requirements,
            costs,
            onFeatureChange,
            onCostChange,
        } = this.props;

        return (
            <Fragment>
                <SelectFeature
                    selectedFeatures={selectedFeatures}
                    onChange={onFeatureChange}
                />

                <RequirementsHoc
                    requirements={requirements}
                    costs={costs}
                    onCostChange={onCostChange}
                />
            </Fragment>
        );
    }
}

Features.propTypes = {
    selectedFeatures: PropTypes.object.isRequired,
    requirements: PropTypes.object.isRequired,
    costs: PropTypes.object.isRequired,
    onFeatureChange: PropTypes.func.isRequired,
    onCostChange: PropTypes.func.isRequired,
};

const styles = theme => ({});

export default withStyles(styles)(Features);
