import React, { Component } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '../SharedComponents/Card/Card';
import Pill from '../SharedComponents/Pill/Pill';

class VenueCategories extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div>
        <Card>
          <CardContent>
            <h2>Morning</h2>
            <Pill
              label="Coffee/Tea"
              handleClick={this.props.handleCategorySelection('Coffee')}
            />
            <Pill
              label="Boozy Brunch"
              handleClick={this.props.handleCategorySelection('Brunch')}
            />
            <Pill
              label="Cafe"
              handleClick={this.props.handleCategorySelection('Cafe')}
            />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default VenueCategories;