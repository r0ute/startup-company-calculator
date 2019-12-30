import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Avatar, Chip, withStyles} from '@material-ui/core';
import {PanoramaFishEye as ModuleIcon} from '@material-ui/icons';
import EmployeeTypes from "../models/EmployeeTypes";

class EmployeeChip extends Component {

    getEmployeeIcon = (employeeTypeName) => {
        return EmployeeTypes.find(type => type.name === employeeTypeName)
            .cssClass;
    };

    render() {
        const {employeeTypeName, employeeLevel, classes} = this.props;
        const employeeIconClass = this.getEmployeeIcon(employeeTypeName);

        console.log("employeeIcon", employeeIconClass)
        const isModule = false;

        return (
            <Chip
                avatar={<Avatar className={classes.transparent}><i className={`fa ${employeeIconClass} ${classes.icon}`}></i></Avatar>}
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
    },
});

export default withStyles(styles)(EmployeeChip);