import React from 'react';
import Chip from '@material-ui/core/Chip';

const Pill = (props) => {
  return (
    <Chip
      label={props.label}
      onClick={props.handleClick}
      clickable
    />
  );
};

export default Pill;