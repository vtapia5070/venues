import React, { Component } from 'react';
import Card from '../SharedComponents/Card/Card';
import Pill from '../SharedComponents/Pill/Pill';

const VenueCategory = (props) => {
  return (
    <div>
      <Card>
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
      </Card>
    </div>
  );
}

export default VenueCategory;