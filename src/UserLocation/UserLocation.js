import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class UserLocation extends Component {
  constructor() {
    super();

    this.state = {
      longitude: '',
      latitude: '',
      city: '',
      state: '',
    }
  }

  getGeoLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {

        const locationObj = {
          longitude: position.coords.longitude,
          latitude: position.coords.latitude
        }

        this.setState({
          ...this.state,
          ...locationObj,
        });
        
        this.props.storeLocation(this.state);
        
      }, (error) => {
        // TODO: handle error and notify user.
        // eslint-disable-no-console
        console.error('An error has occured while retrieving location', error);
      });
    } else {
      // TODO: render modal that prevents user from accessing app
      // and notifies that the location is needed.
      // Perhaps render an input that will allow the user to ender their city and state
      // eslint-disable-no-console
      console.log('geolocation is not enabled on this browser');
    }
  }

  handleChange = (name) => (event) => {
    this.setState({
      ...this.state,
      [name]: event.target.value
    });
    console.log('handle change', name, event.target.value);
  }

  render() {

    return (
      <section>
        <div className="findCurrentLocation">
          <Button
            variant="outlined"
            color="primary"
            onClick={this.getGeoLocation}
          >
          Find My Current Location!
          </Button>
        </div>
        <div className="locationInput">
          <TextField
            name="city"
            label="City"
            value={this.state.city}
            onChange={this.handleChange('city')}
            margin="normal"
          />
          <TextField
            name="state"
            label="State"
            value={this.state.state}
            onChange={this.handleChange('state')}
            margin="normal"
          />
          <Button 
            onClick={() => this.props.storeLocation(this.state)}
            variant="outlined" 
            color="secondary"
            disabled={!this.state.city && !this.state.state}
          >
            Continue
          </Button>
        </div>
      </section>
    );
  }
}

export default UserLocation;
