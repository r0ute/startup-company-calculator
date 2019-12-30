import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Avatar, Chip, withStyles} from '@material-ui/core';
import {PanoramaFishEye as ModuleIcon} from '@material-ui/icons';
import Enums from "../models/Enums";

class EmployeeChip extends Component {

    render() {
        const {employeeTypeName, employeeLevel, classes} = this.props;
        const isModule = false;

        return (
            <Chip
                avatar={<Avatar></Avatar>}
                label={employeeTypeName}
                className={classes.chip}
                variant="outlined"
                onDelete={isModule ? ()=>{} : undefined}
                deleteIcon={isModule ? <ModuleIcon/> : undefined}
            />
        );
    }
}

EmployeeChip.propTypes = {
    employeeTypeName: PropTypes.object.isRequired,
    employeeLevel: PropTypes.object.isRequired,
};

const styles = (theme) => ({
    icon: {
        width: theme.spacing.unit * 4,
        height: theme.spacing.unit * 4,
    },
});

export default withStyles(styles)(EmployeeChip);