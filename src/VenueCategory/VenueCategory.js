import React, { Component } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Card from '../SharedComponents/Card/Card';
import Pill from '../SharedComponents/Pill/Pill';

class VenueCategory extends Component {
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
              handleClick={this.props.handleCategorySelection('morning','Coffee')}
            />
            <Pill
              label="Boozy Brunch"
              handleClick={this.props.handleCategorySelection('morning', 'Brunch')}
            />
            <Pill
              label="Cafe"
              handleClick={this.props.handleCategorySelection('morning', 'Cafe')}
            />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default VenueCategory;