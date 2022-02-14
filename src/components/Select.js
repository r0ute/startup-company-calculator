import React, { Component } from 'react';
import {
    Avatar,
    Chip,
    MenuItem,
    ListItemIcon,
    Paper,
    TextField,
    Typography,
    withStyles,
} from '@material-ui/core';
import ReactSelect from 'react-select';
import { Features } from '../models/Features';
import PropTypes from 'prop-types';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import classNames from 'classnames';

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
    const feature = Features.find(feature => feature.name === props.value);

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
            {feature && (
                <ListItemIcon>
                    <i className={`fa ${feature.faIcon}`}></i>
                </ListItemIcon>
            )}
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
    const feature = Features.find(feature => feature.name === props.children);

    return (
        <Chip
            tabIndex={-1}
            label={props.children}
            className={classNames(props.selectProps.classes.chip, {
                [props.selectProps.classes.chipFocused]: props.isFocused,
            })}
            avatar={
                feature && (
                    <Avatar>
                        <i
                            className={classNames(
                                props.selectProps.classes.icon,
                                'fa',
                                feature.faIcon
                            )}
                        ></i>
                    </Avatar>
                )
            }
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

class Select extends Component {
    handleChange = option => {
        const { onChange } = this.props;

        const ids = !option ? [] : option.map(opt => opt.value);

        onChange(ids);
    };

    render() {
        const {
            classes,
            selectedItems,
            placeholder,
            allItems,
            faIcon,
        } = this.props;

        return (
            <div className={classes.root}>
                <ListItemIcon className={classes.label}>
                    <i className={`fa ${faIcon} `}></i>
                </ListItemIcon>

                <ReactSelect
                    classes={classes}
                    components={components}
                    textFieldProps={{
                        InputLabelProps: {
                            shrink: true,
                        },
                    }}
                    options={allItems
                        .filter(item => !selectedItems.includes(item))
                        .map(item => ({
                            value: item.name,
                            label: item.name,
                        }))
                        .sort((left, right) =>
                            left.label.localeCompare(right.label)
                        )}
                    value={selectedItems
                        .map(item => ({
                            value: item.name,
                            label: item.name,
                        }))
                        .sort((left, right) =>
                            left.label.localeCompare(right.label)
                        )}
                    onChange={this.handleChange}
                    placeholder={placeholder}
                    isMulti
                />
            </div>
        );
    }
}

Select.propTypes = {
    allItems: PropTypes.array.isRequired,
    selectedItems: PropTypes.array.isRequired,
    faIcon: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginBottom: theme.spacing.unit * 2,
    },
    input: {
        display: 'flex',
        padding: 0,
    },
    label: {
        marginBottom: theme.spacing.unit * 0.5,
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
    icon: {
        width: 'auto',
        height: 'auto',
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

export default withStyles(styles)(Select);
