import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Chip, withStyles } from '@material-ui/core';
import Enums from '../models/Enums';
import EmployeeTypes from '../models/EmployeeTypes';
import classNames from 'classnames';

class EmployeeChip extends Component {
    getEmployeeIcon = employeeTypeName => {
        return EmployeeTypes.find(type => type.name === employeeTypeName)
            .cssClass;
    };

    getEmployeeLevelIcon = employeeLevel => {
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
        const { employeeTypeName, employeeLevel, classes, width } = this.props;

        const employeeIconClass = this.getEmployeeIcon(employeeTypeName);
        const employeeLevelIconClass = this.getEmployeeLevelIcon(employeeLevel);

        return (
            <Chip
                avatar={
                    <Avatar
                        className={classNames(
                            classes.transparent,
                            classes.employeeAvatar
                        )}
                        children={
                            <i
                                className={`fa ${employeeIconClass} ${classes.icon}`}
                            ></i>
                        }
                    />
                }
                label={width === 'xs' ? undefined : employeeTypeName}
                className={classes.chip}
                variant="outlined"
                onDelete={() => {}}
                deleteIcon={
                    <Avatar
                        className={classNames(
                            classes.transparent,
                            classes.employeeLevelAvatar
                        )}
                        children={
                            <i
                                className={`fa ${employeeLevelIconClass} ${classes.starIcon}`}
                            ></i>
                        }
                    />
                }
            />
        );
    }
}

EmployeeChip.propTypes = {
    employeeTypeName: PropTypes.string.isRequired,
    employeeLevel: PropTypes.string.isRequired,
    width: PropTypes.string,
};

const styles = theme => ({
    transparent: {
        backgroundColor: 'transparent',
    },
    icon: {
        width: 'auto',
        height: 'auto',
    },
    employeeAvatar: {
        width: theme.spacing.unit * 4,
        height: theme.spacing.unit * 4,
    },
    employeeLevelAvatar: {
        width: theme.spacing.unit * 3,
        height: theme.spacing.unit * 3,
    },
});

export default withStyles(styles)(EmployeeChip);
