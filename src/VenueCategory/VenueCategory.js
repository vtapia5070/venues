import React, { Component } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '../SharedComponents/Card/Card';
import Pill from '../SharedComponents/Pill/Pill';

const VenueCategory = (props) => {
  return (
    <div>
      <Card>
        <CardContent>
          <h2>Morning</h2>
          <Pill
            label="Coffee/Tea"
            handleClick={props.handleCategorySelection('morning','Coffee')}
          />
          <Pill
            label="Boozy Brunch"
            handleClick={props.handleCategorySelection('morning', 'Brunch')}
          />
          <Pill
            label="Cafe"
            handleClick={props.handleCategorySelection('morning', 'Cafe')}
          />
          <Pill
            label="Bakery"
            handleClick={props.handleCategorySelection('morning', 'Bakery')}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default VenueCategory;