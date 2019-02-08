import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Paper, Table, TableBody, TableCell, TableHead, TableRow, withStyles} from '@material-ui/core';
import ComponentChip from "./ComponentChip";
import Enums from "../models/Enums";

class Requirements extends Component {

    mapRequirements = (requirements) => {
        const arr = [];

        for (const requirement in requirements) {
            arr.push(requirements[requirement]);
        }

        return arr.sort((left, right) => {
            if (left.component.type === right.component.type) {
                return left.component.name.localeCompare(right.component.name)
            } else if (left.component.type === Enums.ComponentTypes.Module) {
                return -1;
            } else if (right.component.type === Enums.ComponentTypes.Module) {
                return 1;
            } else {
                return 0;
            }
        });
    };


    render() {
        const {requirements, classes} = this.props;

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
                            <TableCell align="right">Count</TableCell>
                            <TableCell align="right">Produce Hours</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {renderedRequirements
                            .map(requirement => (
                                <TableRow key={requirement.component.name}>
                                    <TableCell>
                                        <ComponentChip requirement={requirement}/>
                                    </TableCell>
                                    <TableCell align="right">{requirement.count}</TableCell>
                                    <TableCell align="right">{requirement.component.produceHours}</TableCell>
                                </TableRow>
                            ))}
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
