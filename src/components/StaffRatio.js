import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    InputAdornment,
    FormLabel,
    FormGroup,
    TextField,
    withStyles
} from '@material-ui/core';
import gcd from 'compute-gcd';
import EmployeeTypes from "../models/EmployeeTypes";

class StaffRatio extends Component {

    getEmployeeIcon = (employeeTypeName) => {
        return EmployeeTypes.find(type => type.name === employeeTypeName)
            .cssClass;
    };

    sort = (left, right) => {
        return left.localeCompare(right);
    };

    getDevCosts = (requirements, commonFactorCallback, formatterCallback = (num) => num) => {
        const costs = {};

        Object.keys(requirements).forEach(key => {
            const employee = requirements[key].component.employeeTypeName;
            const produceHours = requirements[key].count * requirements[key].produceHours;

            if (costs[employee]) {
                costs[employee] = costs[employee] + produceHours;
            } else {
                costs[employee] = produceHours;
            }
        });

        const commonFactor = commonFactorCallback(...Object.keys(costs)
            .map(key => costs[key]));

        Object.keys(costs).forEach(key => {
            const cost = costs[key] / commonFactor;

            costs[key] = (formatterCallback !== undefined) 
                ? formatterCallback(cost) : cost;
        });

        return costs;
    };

    render() {
        const {requirements, classes} = this.props;

        const optimalDevCosts = this.getDevCosts(requirements, gcd);

        return (
            <FormGroup>
                <FormLabel className={classes.label}>Optimal Staff Ratio</FormLabel>

                <FormGroup row>
                
                    
                    {Object.keys(optimalDevCosts)
                        .sort(this.sort)
                        .map(key => (
                            <TextField
                                label={key}
                                value={optimalDevCosts[key]}
                                className={classes.textField}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start" className={classes.adornment}>
                                            <i className={`fa ${this.getEmployeeIcon(key)} ${classes.icon}`}></i>
                                        </InputAdornment>
                                )}}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                type="number"
                                margin="normal"/>
                        ))}
                </FormGroup>
            </FormGroup>
        );
    }

}

StaffRatio.propTypes = {
    requirements: PropTypes.object.isRequired,
};

const styles = (theme) => ({
    label: {
        marginTop: theme.spacing.unit * 2,
    },
    adornment: {
        width: theme.spacing.unit * 2,
    },
    textField: {
        textAlign: 'left',
        width: theme.spacing.unit * 10,
        marginRight: theme.spacing.unit * 2,
    },
});

export default withStyles(styles)(StaffRatio);