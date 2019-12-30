import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Avatar, Chip, withStyles} from '@material-ui/core';
import {PanoramaFishEye as ModuleIcon} from '@material-ui/icons';
import Enums from "../models/Enums";
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(faCheckSquare, faCoffee);

class EmployeeChip extends Component {

    render() {
        const {employeeTypeName, employeeLevel, classes} = this.props;
        const isModule = false;

        return (
            <Chip
                avatar={<Avatar className={classes.transparent}><FontAwesomeIcon icon="coffee" /></Avatar>}
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
        width: theme.spacing.unit * 4,
        height: theme.spacing.unit * 4,
    },
});

export default withStyles(styles)(EmployeeChip);