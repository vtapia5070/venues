import React from 'react';
import classnames from 'classnames';

import './SectionContainer.css';

const SharedContainer = (props) => {
  return (
    <section 
      className={classnames(props.classes, 'sectionContainer')}
    >
      {props.children}
    </section>
  );
};

export default SharedContainer;