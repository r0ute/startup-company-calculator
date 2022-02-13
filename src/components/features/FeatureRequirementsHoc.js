import React from 'react';
import withWidth from '@material-ui/core/withWidth';
import FeatureRequirements from './FeatureRequirements';

function FeatureRequirementsHoc(props) {
    return <FeatureRequirements {...props} />;
}

export default withWidth()(FeatureRequirementsHoc);
