import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import UserLocation from './UserLocation/UserLocation';
import VenueCategories from './VenueCategories/VenueCategories';
import ItineraryTable from './Itinerary/ItineraryTable';
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
      }
    }
  }

  handleLocationChange = (locationValues) => {
    this.setState({
      ...this.state,
      userLocation: locationValues,
    });
    
  }

  handleCategorySelection = (selection) => (event) => {
    console.log('selection:', selection);
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
        {/* {
          this.state.userLocation.longitude || this.state.userLocation.city && (
            
          )
        } */}
        <VenueCategories handleCategorySelection={this.handleCategorySelection} />
        <ItineraryTable />
      </div>
    );
  }
}

export default App;
