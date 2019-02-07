import React, {Component, Fragment} from 'react';
import {withStyles} from '@material-ui/core';
import Select from 'react-select';
import {Features} from '../models/Features';
import PropTypes from 'prop-types';

class SelectFeature extends Component {

    allFeatures = Features.map(feature => ({
        value: feature.name,
        label: feature.name,
    }));

    handleFeatureChange = () => {

    };


    render() {
        const {classes, selectedFeatures} = this.props;

        return (
            <Fragment>
                <Select
                    classes={classes}
                    textFieldProps={{
                        label: 'Label',
                        InputLabelProps: {
                            shrink: true,
                        },
                    }}
                    options={this.allFeatures.filter(feature => !selectedFeatures.includes(feature))}
                    value={selectedFeatures}
                    onChange={this.handleFeatureChange}
                    placeholder="Add Feature..."
                    isMulti
                />
            </Fragment>
        );

    }
}

SelectFeature.propTypes = {
    selectedFeatures: PropTypes.array.isRequired,
};

const styles = (theme) => ({});

export default withStyles(styles)(SelectFeature);