import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Avatar, Chip, Paper, Table, TableBody, TableCell, TableHead, TableRow, withStyles} from '@material-ui/core';

class Requirements extends Component {

    mapRequirements = (requirements) => {
        const arr = [];

        for (const requirement in requirements) {
            arr.push(requirements[requirement]);
        }

        return arr;
    };


    render() {
        const {requirements, classes} = this.props;

        const renderedRequirements = this.mapRequirements(requirements);

        if (!renderedRequirements.length) {
            return '';
        }

        return (
            <Fragment>
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
                                            <Chip
                                                avatar={<Avatar><img className={classes.icon}
                                                                     src={require(`../assets/${requirement.component.icon}`)}/></Avatar>}
                                                label={requirement.component.name}
                                                className={classes.chip}
                                            />
                                        </TableCell>
                                        <TableCell align="right">{requirement.count}</TableCell>
                                        <TableCell align="right">{requirement.component.produceHours}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Fragment>
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
    icon: {
        width: theme.spacing.unit * 4,
        height: theme.spacing.unit * 4,
    },
    chip: {
        margin: theme.spacing.unit,
    },
    table: {
        minWidth: 700,
    },
});

export default withStyles(styles)(Requirements);
