import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import SelectRackDevice from './SelectRackDevice';
import RackDeviceRequirementsHoc from './RackDeviceRequirementsHoc';

class RackDevices extends Component {
    render() {
        return (
            <Fragment>
                <SelectRackDevice
                    selectedFeatures={[]}
                    onChange={this.handleFeatureChange}
                />

                <RackDeviceRequirementsHoc
                    requirements={[]}
                    costs={[]}
                    onCostChange={this.handleCostChange}
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
