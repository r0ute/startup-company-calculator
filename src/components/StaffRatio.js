import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    InputAdornment,
    FormLabel,
    FormGroup,
    TextField,
    withStyles,
} from '@material-ui/core';
import EmployeeTypes from '../models/EmployeeTypes';

class StaffRatio extends Component {
    getEmployeeIcon = employeeTypeName => {
        return EmployeeTypes.find(type => type.name === employeeTypeName)
            .cssClass;
    };

    sort = (left, right) => {
        return left.localeCompare(right);
    };

    handleChange = key => event => {
        const { onCostChange } = this.props;
        const { value } = event.target;

        onCostChange(key, +value);
    };

    render() {
        const { costs, classes } = this.props;

        return (
            <FormGroup>
                <FormLabel className={classes.label}>
                    Optimal Staff Ratio
                </FormLabel>

                <FormGroup row>
                    {Object.keys(costs)
                        .sort(this.sort)
                        .map(key => (
                            <TextField
                                key={key}
                                label={key}
                                value={costs[key] > 0 ? costs[key] : ''}
                                onChange={this.handleChange(key)}
                                className={classes.textField}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment
                                            position="start"
                                            className={classes.adornment}
                                        >
                                            <i
                                                className={`fa ${this.getEmployeeIcon(
                                                    key
                                                )} ${classes.icon}`}
                                            ></i>
                                        </InputAdornment>
                                    ),
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                type="number"
                                margin="normal"
                            />
                        ))}
                </FormGroup>
            </FormGroup>
        );
    }
}

StaffRatio.propTypes = {
    costs: PropTypes.object.isRequired,
    onCostChange: PropTypes.func.isRequired,
};

const styles = theme => ({
    label: {
        marginTop: theme.spacing.unit * 2,
    },
    adornment: {
        width: theme.spacing.unit * 2,
    },
    textField: {
        width: theme.spacing.unit * 10,
        marginRight: theme.spacing.unit * 2,
    },
});

export default withStyles(styles)(StaffRatio);
