import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Avatar,
    Chip,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
    withStyles
} from '@material-ui/core';
import {Help as HelpIcon} from '@material-ui/icons';
import ComponentChip from "./ComponentChip";
import Enums from "../models/Enums";
import moment from "moment";
import momentDurationFormat from 'moment-duration-format';
import gcd from 'compute-gcd';

momentDurationFormat(moment);

class Requirements extends Component {

    mapRequirements = (requirements) => {
        return Object.keys(requirements)
            .map(key => requirements[key])
            .sort(this.sortComponents);
    };

    sortComponents = (left, right) => {
        if (left.component.type === right.component.type) {
            return left.component.name.localeCompare(right.component.name)
        } else if (left.component.type === Enums.ComponentTypes.Module) {
            return -1;
        } else if (right.component.type === Enums.ComponentTypes.Module) {
            return 1;
        } else {
            return 0;
        }
    };

    getDevCosts = (requirements) => {
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

        return costs;
    };

    computeGcd = (costs) => {
        const costArray = Object.keys(costs)
            .map(key => costs[key]);

        if (!costArray.length) {
            return;
        }

        return gcd(...costArray);
    };

    render() {
        const {requirements, classes} = this.props;

        const renderedRequirements = this.mapRequirements(requirements);
        const devCosts = this.getDevCosts(requirements);
        const costsGcd = this.computeGcd(devCosts);

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
                                <Grid container alignItems="center" justify="flex-end">
                                    <Grid item>
                                        Prod. Time
                                    </Grid>
                                    <Grid item>
                                        <Tooltip title="How much time it takes to produce 1 unit">
                                            <HelpIcon fontSize="small"/>
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
                                    <ComponentChip requirement={requirement}/>
                                </TableCell>
                                <TableCell>{`${requirement.component.employeeTypeName} (${requirement.component.employeeLevel})`} </TableCell>
                                <TableCell align="right">{requirement.count}</TableCell>
                                <TableCell
                                    align="right">{moment.duration(requirement.produceHours, 'hours').format('D[d] h[h]')}</TableCell>
                            </TableRow>
                        ))}

                        <TableRow>
                            <TableCell>Optimal Staff Ratio</TableCell>
                            <TableCell colSpan={3}>
                                {Object.keys(devCosts)
                                    .map(key => (
                                        <Chip
                                            key={key}
                                            avatar={<Avatar>{devCosts[key] / costsGcd}</Avatar>}
                                            label={key}
                                            className={classes.chip}
                                            variant="outlined"
                                        />
                                    ))}
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
};

const styles = (theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    chip: {
        margin: theme.spacing.unit,
    },
    table: {
        minWidth: 700,
    },
});

export default withStyles(styles)(Requirements);
