import React, { Component } from 'react';
import Card from '../SharedComponents/Card/Card';
import Pill from '../SharedComponents/Pill/Pill';

const VenueCategory = (props) => {
  const { category, handleCategorySelection } = props;
  return (
    <div>
      <Card>
        <h2>{ category.name }</h2>
        {category.labels.map((label, index) => {
          return (
            <Pill
              key={`${category.name}_${label}_${index}`}
              label={label}
              handleClick={handleCategorySelection(category.name,label)}
              disabled={props.isDisabled}
            />
          )
        })}
      </Card>
    </div>
  );
}

export default VenueCategory;