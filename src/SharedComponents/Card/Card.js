import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Card = (props) => {
  return (
    <Card>
      <CardContent>
        {...props.children}
      </CardContent>
    </Card>
  );
};

export default Card;