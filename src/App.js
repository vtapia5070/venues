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
      venueOptions: [],
      itinerary: []
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

  addVenueToItinerary = (venue) => {
    console.log('venue:', venue, this.state.itinerary);
    const updatedItineraryList = this.state.itinerary.concat([venue]);
    console.log('after:', updatedItineraryList);
    this.setState({
      ...this.state,
      itinerary: updatedItineraryList
    });
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
          <VenuesTable 
            venues={this.state.venueOptions} 
            handleSelectedVenue={this.addVenueToItinerary}
            hasCheckbox
          />
        )}
        { this.state.itinerary.length > 0 && (
          <VenuesTable 
            venues={this.state.itinerary} 
          />
        )}
      </div>
    );
  }
}

export default App;
