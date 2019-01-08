import React from 'react';

import './SectionHeader.css';

const SectionHeader = (props) => {
  return (
    <h2 classNAme="sectionHeader">{props.children}</h2>
  );
}

export default SectionHeader;