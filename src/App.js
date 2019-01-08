import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import UserLocation from './UserLocation/UserLocation';
import VenueCategory from './VenueCategory/VenueCategory';
import VenuesTable from './VenuesTable/VenuesTable';
import * as api from './api';

import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      userLocation: {
        longitude: '',
        latitude: '',
        city: '',
        state: '',
      },
      venueOptions: []
    }
  }

  handleLocationChange = (locationValues) => {
    this.setState({
      ...this.state,
      userLocation: locationValues,
    });
    
  }

  handleCategorySelection = (category, selection) => (event) => {
    if (this.state.userLocation.latitude || this.state.userLocation.city) {
      api.searchVenuesByQuery(selection, this.state.userLocation)
        .then((data) => {
          this.setState({
            ...this.state,
            venueOptions: data.response.venues
          });
        })
        .catch((err) => {
          console.log('error:', err);
        });
    }
  }

  renderCategories () {
    const categories = this.state.venueCategories.map((category) => {
      return (
        <div>
          <VenueCategory
            handleCategorySelection={this.handleCategorySelection}
            category={category.name}
          />
          <VenuesTable venueOptions={category.venueOptions} />
        </div>
      )
    });

    return categories;
  }

  render() {
    return (
      <div className="App">
        <header>
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Itinerary Planner
              </Typography>
            </Toolbar>
          </AppBar>
        </header>

        <UserLocation storeLocation={this.handleLocationChange} />
        <VenueCategory
          handleCategorySelection={this.handleCategorySelection}
          category="Morning"
        />
        { this.state.venueOptions.length > 0 && (
          <VenuesTable venueOptions={this.state.venueOptions} />
        )}
      </div>
    );
  }
}

export default App;
