import React, { Component } from 'react';
import {
    Chip,
    MenuItem,
    Paper,
    TextField,
    Typography,
    withStyles,
} from '@material-ui/core';
import Select from 'react-select';
import { Features } from '../models/Features';
import PropTypes from 'prop-types';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import classNames from 'classnames';
import Enums from '../models/Enums';

const NoOptionsMessage = props => {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.noOptionsMessage}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
};

const inputComponent = ({ inputRef, ...props }) => {
    return <div ref={inputRef} {...props} />;
};

const Control = props => {
    return (
        <TextField
            fullWidth
            InputProps={{
                inputComponent,
                inputProps: {
                    className: props.selectProps.classes.input,
                    inputRef: props.innerRef,
                    children: props.children,
                    ...props.innerProps,
                },
            }}
            {...props.selectProps.textFieldProps}
        />
    );
};

const Option = props => {
    return (
        <MenuItem
            buttonRef={props.innerRef}
            selected={props.isFocused}
            component="div"
            style={{
                fontWeight: props.isSelected ? 500 : 400,
            }}
            {...props.innerProps}
        >
            {props.children}
        </MenuItem>
    );
};

const Placeholder = props => {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.placeholder}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
};

const SingleValue = props => {
    return (
        <Typography
            className={props.selectProps.classes.singleValue}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
};

const ValueContainer = props => {
    return (
        <div className={props.selectProps.classes.valueContainer}>
            {props.children}
        </div>
    );
};

const MultiValue = props => {
    return (
        <Chip
            tabIndex={-1}
            label={props.children}
            className={classNames(props.selectProps.classes.chip, {
                [props.selectProps.classes.chipFocused]: props.isFocused,
            })}
            onDelete={props.removeProps.onClick}
        />
    );
};

const Menu = props => {
    return (
        <Paper
            square
            className={props.selectProps.classes.paper}
            {...props.innerProps}
        >
            {props.children}
        </Paper>
    );
};

const components = {
    Control,
    Menu,
    MultiValue,
    NoOptionsMessage,
    Option,
    Placeholder,
    SingleValue,
    ValueContainer,
};

class SelectFeature extends Component {
    allFeatures = Features.filter(feature =>
        [
            Enums.FeatureCategories.Users,
            Enums.FeatureCategories.Enhancement,
        ].includes(feature.categoryName)
    )
        .map(feature => ({
            value: feature.name,
            label: feature.name,
        }))
        .sort((left, right) => left.label.localeCompare(right.label));

    handleFeatureChange = option => {
        const { onChange } = this.props;

        const featureIds = !option ? [] : option.map(opt => opt.value);

        onChange(Features.filter(feature => featureIds.includes(feature.name)));
    };

    render() {
        const { classes, selectedFeatures } = this.props;

        return (
            <Select
                classes={classes}
                components={components}
                textFieldProps={{
                    InputLabelProps: {
                        shrink: true,
                    },
                }}
                options={this.allFeatures.filter(
                    feature => !selectedFeatures.includes(feature)
                )}
                value={selectedFeatures.map(feature => ({
                    value: feature.name,
                    label: feature.name,
                }))}
                onChange={this.handleFeatureChange}
                placeholder="Add Feature..."
                isMulti
            />
        );
    }
}

SelectFeature.propTypes = {
    selectedFeatures: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 250,
    },
    input: {
        display: 'flex',
        padding: 0,
    },
    valueContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
    },
    chip: {
        margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
    },
    chipFocused: {
        backgroundColor: emphasize(
            theme.palette.type === 'light'
                ? theme.palette.grey[300]
                : theme.palette.grey[700],
            0.08
        ),
    },
    noOptionsMessage: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    singleValue: {
        fontSize: 16,
    },
    placeholder: {
        position: 'absolute',
        left: 2,
        fontSize: 16,
    },
    paper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
    divider: {
        height: theme.spacing.unit * 2,
    },
});

export default withStyles(styles)(SelectFeature);
