import React from 'react';
import withWidth from '@material-ui/core/withWidth';
import RackDeviceRequirements from './RackDeviceRequirements';

function RackDeviceRequirementsHoc(props) {
    return <RackDeviceRequirements {...props} />;
}

export default withWidth()(RackDeviceRequirementsHoc);
