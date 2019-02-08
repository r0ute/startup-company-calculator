import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Avatar, Chip, withStyles} from '@material-ui/core';
import {PanoramaFishEye as ModuleIcon} from '@material-ui/icons';
import Enums from "../models/Enums";

class ComponentChip extends Component {

    render() {
        const {requirement, classes} = this.props;
        const isModule = requirement.component.type === Enums.ComponentTypes.Module;

        return (
            <Chip
                avatar={<Avatar><img className={classes.icon}
                                     src={require(`../assets/${requirement.component.icon}`)}
                                     alt={requirement.component.name}/></Avatar>}
                label={requirement.component.name}
                className={classes.chip}
                variant="outlined"
                onDelete={isModule ? ()=>{} : undefined}
                deleteIcon={isModule ? <ModuleIcon/> : undefined}
            />
        );
    }
}

ComponentChip.propTypes = {
    requirement: PropTypes.object.isRequired,
};

const styles = (theme) => ({
    icon: {
        width: theme.spacing.unit * 4,
        height: theme.spacing.unit * 4,
    },
});

export default withStyles(styles)(ComponentChip);
