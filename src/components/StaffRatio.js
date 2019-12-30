import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Avatar, Chip, withStyles} from '@material-ui/core';
import gcd from 'compute-gcd';
import {TableRow, TableCell} from '@material-ui/core';

class StaffRatio extends Component {

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

        const precise = true;
        const devCosts = this.getDevCosts(requirements, (precise) ? gcd : Math.min, (precise) ? undefined : (num) => num.toFixed(1));

        return (
            <TableRow>
                <TableCell>Optimal Staff Ratio</TableCell>
                <TableCell colSpan={3}>
                    {Object.keys(devCosts)
                        .map(key => (
                            <Chip
                                key={key}
                                avatar={<Avatar>{devCosts[key]}</Avatar>}
                                label={key}
                                className={classes.chip}
                                variant="outlined"
                            />
                        ))}
                </TableCell>

            </TableRow>
        );
    }

}

StaffRatio.propTypes = {
    requirements: PropTypes.object.isRequired,
};

const styles = (theme) => ({
    chip: {
        marginRight: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit,
        marginTop: theme.spacing.unit,
    },
});

export default withStyles(styles)(StaffRatio);