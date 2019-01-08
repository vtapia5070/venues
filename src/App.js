import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import SectionHeader from './SharedComponents/SectionHeader/SectionHeader';
import UserLocation from './UserLocation/UserLocation';
import VenueCategory from './VenueCategory/VenueCategory';
import VenuesTable from './VenuesTable/VenuesTable';
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
      light: '#7293a6',
      main: '#7293a6',
      dark: '#193b4b',
      contrastText: '#fff',
    },
    spacing: {
      unitSM: '10px'
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
            <AppBar position="static" color="default">
              <Toolbar>
                <Typography variant="h6" color="inherit">
                  Itinerary Planner
                </Typography>
              </Toolbar>
            </AppBar>
          </header>

          <SectionHeader>Find your current location</SectionHeader>
          <UserLocation storeLocation={this.handleLocationChange} />
          
          <SectionHeader>Search places of interest</SectionHeader>
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

          <SectionHeader>Itinerary</SectionHeader>
          { this.state.itinerary.length > 0 ? (
            <VenuesTable 
            venues={this.state.itinerary} 
            />
            ) : (
              <div>Build your itinerary by selecting venue options above!</div>
            )}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles({ withTheme: true })(App);
