import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
  card: {
    margin: `${ theme.spacing.unit * 3}px`,
  }
});

const MaterialUICard = (props) => {
  const content = (<div>{props.children}</div>);
  return (
    <Card className={props.classes.card}>
      <CardContent>
        {props.children}
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(MaterialUICard);