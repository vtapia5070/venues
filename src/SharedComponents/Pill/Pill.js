import React from 'react';
import Chip from '@material-ui/core/Chip';

const Pill = (props) => {
  return (
    <Chip
      onClick={props.handleClick}
      clickable
    >
      {...props.children}
    </Chip>
  );
};

export default Chip;