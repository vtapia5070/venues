import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  pill: {
    margin: `${theme.spacing.unit / 2}px`,
  }
});

const Pill = (props) => {

  const { classes, disabled, label } = props;

  const chip = (
    <Chip
      label={label}
      onClick={props.handleClick}
      clickable={!disabled}
      className={classes.pill}
    />
  );

  if (disabled) {
    return (
      <Tooltip
        title="You must share your location above!"
        placement="bottom-start"
        disableTouchListener={true}
      >
        {chip}
      </Tooltip>
    )
  }

  return chip;

};

export default withStyles(styles)(Pill);