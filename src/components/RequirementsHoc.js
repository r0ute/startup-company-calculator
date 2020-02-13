import React from 'react';
import withWidth from '@material-ui/core/withWidth';
import Requirements from './Requirements';

function RequirementsHoc(props) {
    return <Requirements {...props} />;
}

export default withWidth()(RequirementsHoc);
