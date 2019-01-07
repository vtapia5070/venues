import React, { Component } from 'react';
import UserLocation from './UserLocation/UserLocation.js';
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

  render() {
    return (
      <div className="App">
        <UserLocation storeLocation={this.handleLocationChange} />
        {/* {
          this.state.userLocation.longitude || this.state.userLocation.city && (
            
          )
        } */}
      </div>
    );
  }
}

export default App;
