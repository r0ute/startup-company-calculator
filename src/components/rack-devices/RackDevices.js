import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import SelectRackDevice from './SelectRackDevice';
import RackDeviceRequirementsHoc from './RackDeviceRequirementsHoc';

class RackDevices extends Component {
    render() {
        return (
            <Fragment>
                <SelectRackDevice selectedFeatures={[]} onChange={() => {}} />

                <RackDeviceRequirementsHoc
                    requirements={[]}
                    costs={[]}
                    onCostChange={() => {}}
                />
            </Fragment>
        );
    }
}

RackDevices.propTypes = {
    foo: PropTypes.object.isRequired,
};

const styles = theme => ({});

export default withStyles(styles)(RackDevices);
