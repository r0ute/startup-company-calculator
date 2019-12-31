import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
    withStyles,
} from '@material-ui/core';
import { Help as HelpIcon } from '@material-ui/icons';
import ComponentChip from './ComponentChip';
import EmployeeChip from './EmployeeChip';
import StaffRatio from './StaffRatio';
import moment from 'moment';
import momentDurationFormat from 'moment-duration-format';

momentDurationFormat(moment);

class Requirements extends Component {
    mapRequirements = requirements => {
        return Object.keys(requirements)
            .map(key => requirements[key])
            .sort(this.sortComponents);
    };

    sortComponents = (left, right) => {
        return (
            left.component.employeeTypeName.localeCompare(
                right.component.employeeTypeName
            ) || left.component.name.localeCompare(right.component.name)
        );
    };

    render() {
        const { requirements, costs, onCostChange, classes } = this.props;

        const renderedRequirements = this.mapRequirements(requirements);

        if (!renderedRequirements.length) {
            return '';
        }

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Component</TableCell>
                            <TableCell>Created By</TableCell>
                            <TableCell align="right">Count</TableCell>
                            <TableCell align="right">
                                <Grid
                                    container
                                    alignItems="center"
                                    justify="flex-end"
                                >
                                    <Grid item>Prod. Time</Grid>
                                    <Grid item>
                                        <Tooltip title="How much time it takes to produce 1 unit">
                                            <HelpIcon fontSize="small" />
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {renderedRequirements.map(requirement => (
                            <TableRow key={requirement.component.name}>
                                <TableCell>
                                    <ComponentChip
                                        component={requirement.component}
                                    />
                                </TableCell>
                                <TableCell>
                                    <EmployeeChip
                                        employeeTypeName={
                                            requirement.component
                                                .employeeTypeName
                                        }
                                        employeeLevel={
                                            requirement.component.employeeLevel
                                        }
                                    />
                                </TableCell>
                                <TableCell align="right">
                                    {requirement.count}
                                </TableCell>
                                <TableCell align="right">
                                    {moment
                                        .duration(
                                            requirement.produceHours,
                                            'hours'
                                        )
                                        .format('D[d] h[h]')}
                                </TableCell>
                            </TableRow>
                        ))}

                        <TableRow>
                            <TableCell colSpan={4}>
                                <StaffRatio
                                    requirements={requirements}
                                    costs={costs}
                                    onCostChange={onCostChange}
                                />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

Requirements.propTypes = {
    requirements: PropTypes.object.isRequired,
    costs: PropTypes.object.isRequired,
    onCostChange: PropTypes.func.isRequired,
};

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {},
});

export default withStyles(styles)(Requirements);
