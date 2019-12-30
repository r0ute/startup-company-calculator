import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Avatar, Chip, withStyles} from '@material-ui/core';
import Enums from '../models/Enums';
import EmployeeTypes from "../models/EmployeeTypes";

class EmployeeChip extends Component {

    getEmployeeIcon = (employeeTypeName) => {
        return EmployeeTypes.find(type => type.name === employeeTypeName)
            .cssClass;
    };

    getEmployeeLevelIcon = (employeeLevel) => {
        switch (employeeLevel) {
            case Enums.EmployeeLevels.Beginner:
                return 'fa-star-o';
            case Enums.EmployeeLevels.Intermediate:
                return 'fa-star-half-o';
            case Enums.EmployeeLevels.Expert:
                return 'fa-star';
            default:
                return '';
        }
    };

    render() {
        const {employeeTypeName, employeeLevel, classes} = this.props;

        const employeeIconClass = this.getEmployeeIcon(employeeTypeName);
        const employeeLevelIconClass = this.getEmployeeLevelIcon(employeeLevel);
   

        return (
            <Chip
                avatar={<Avatar className={classes.transparent}>
                            <i className={`fa ${employeeIconClass} ${classes.icon}`}></i>
                    </Avatar>}
                label={employeeTypeName}
                className={classes.chip}
                variant="outlined"
                onDelete={() => {}}
                deleteIcon={<i className={`fa ${employeeLevelIconClass} ${classes.icon}`}></i>}
            />
        );
    }
}

EmployeeChip.propTypes = {
    employeeTypeName: PropTypes.string.isRequired,
    employeeLevel: PropTypes.string.isRequired,
};

const styles = (theme) => ({
    transparent: {
        backgroundColor: 'transparent',
    },
    icon: {
        textAlign: 'center',
        verticalAlign: 'middle',
        margin: theme.spacing.unit,
    },
});

export default withStyles(styles)(EmployeeChip);