import React, { Component } from 'react';
import Card from '@material-ui/core/Card';

const ContentContainer = children => (
  <div>
    {children}
  </div>
);

const MaterialUICard = (props) => {
  const content = (<div>{props.children}</div>);
  return (
    <Card>
      {props.children}
    </Card>
  );
};

export default MaterialUICard;