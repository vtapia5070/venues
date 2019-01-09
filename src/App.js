import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import UserLocation from './UserLocation/UserLocation';
import VenueCategory from './VenueCategory/VenueCategory';
import { categories } from './categoryConfig';
import Itinerary from './Itinerary/Itinerary';
import * as api from './api';

import './App.css';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: '#ff5f52',
      main: '#c62828',
      dark: '#8e0000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#526572',
      main: '#283b47',
      dark: '#001520',
      contrastText: '#fff',
    },
    spacing: {
      unit: '10px'
    }
  },
});

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
      itinerary: [],
      fetchingCategorySuggestions: false,
      hasUserLocation: false
    }
  }

  handleLocationChange = (locationValues) => {
    this.setState({
      ...this.state,
      userLocation: locationValues,
      hasUserLocation: true
    });
    
  }

  handleCategorySelection = (category, selection) => (event) => {
    
    if (this.state.hasUserLocation) {
      this.setState({
        ...this.state, 
        fetchingCategoryOptions: true
      });
      api.searchVenuesByQuery(selection, this.state.userLocation)
        .then((data) => {
          this.setState({
            ...this.state,
            venueOptions: data.response.venues,
            fetchingCategoryOptions: false
          });
        });
    }
  }

  addVenueToItinerary = (venue) => {
    const updatedItineraryList = this.state.itinerary.concat([venue]);
    this.setState({
      ...this.state,
      itinerary: updatedItineraryList
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <header>
            <AppBar position="fixed" color="secondary">
              <Toolbar>
                <h2>
                  Itinerary Planner
                </h2>
              </Toolbar>
            </AppBar>
          </header>
          <UserLocation 
            storeLocation={this.handleLocationChange} 
            hasUserLocation={this.state.hasUserLocation} 
          />
          <VenueCategory
            handleCategorySelection={this.handleCategorySelection}
            category={categories.morning}
            isDisabled={!this.state.hasUserLocation}
            venueOptions={this.state.venueOptions}
            fetchingCategoryOptions={this.state.fetchingCategoryOptions}
            handleSelectedVenue={this.addVenueToItinerary}
          />

          <Itinerary 
            itinerary={this.state.itinerary}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles({ withTheme: true })(App);
