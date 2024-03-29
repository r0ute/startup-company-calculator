import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Chip, withStyles } from '@material-ui/core';
import { PanoramaFishEye as ModuleIcon } from '@material-ui/icons';
import Enums from '../models/Enums';

class ComponentChip extends Component {
    render() {
        const { component, classes, width } = this.props;
        const isModule = component.type === Enums.ComponentTypes.Module;

        return (
            <Chip
                tabIndex={-1}
                clickable={false}
                avatar={
                    <Avatar>
                        <img
                            className={classes.icon}
                            src={require(`../assets/${component.icon}`)}
                            alt={component.name}
                        />
                    </Avatar>
                }
                label={width === 'xs' ? undefined : component.name}
                className={classes.chip}
                variant="outlined"
                onDelete={isModule ? () => {} : undefined}
                deleteIcon={isModule ? <ModuleIcon /> : undefined}
            />
        );
    }
}

ComponentChip.propTypes = {
    component: PropTypes.object.isRequired,
    width: PropTypes.string,
};

const styles = theme => ({
    icon: {
        width: theme.spacing.unit * 4,
        height: theme.spacing.unit * 4,
    },
});

export default withStyles(styles)(ComponentChip);
