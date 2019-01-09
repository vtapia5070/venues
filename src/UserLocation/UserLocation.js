import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Card from '../SharedComponents/Card/Card';
import SectionHeader from '../SharedComponents/SectionHeader/SectionHeader';
import SectionContainer from '../SharedComponents/SectionContainer/SectionContainer';

import './UserLocation.css';

const styles = theme => ({
  button: {
    padding: `${theme.spacing.unit}`,
  },
  input: {
    width: '30%',
    margin: `0px ${theme.spacing.unit}px`
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0px`
  }
});

class UserLocation extends Component {
  constructor() {
    super();

    this.state = {
      userLocation: {
        longitude: '',
        latitude: '',
        city: '',
        state: '',
      },
      fetchingLocation: false,
      isGeolocationSupported: true
    }
  }

  getGeoLocation = () => {
    this.setState({
      ...this.state,
      fetchingLocation: true
    });

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {

        const locationObj = {
          longitude: position.coords.longitude,
          latitude: position.coords.latitude
        }

        this.setState({
          ...this.state,
          ...locationObj,
          fetchingLocation: false
        });
        
        this.props.storeLocation(this.state);
        
      }, (error) => {
        this.setState({
          ...this.state,
          isGeolocationSupported: false,
          fetchingLocation: false
        });
      });
    } else {
      this.setState({
        ...this.state,
        isGeolocationSupported: false,
        fetchingLocation: false
      });
    }
  }

  handleInputChange = (name) => (event) => {
    this.setState({
      ...this.state,
      [name]: event.target.value
    });
  }

  renderFetchLocationButton () {
    let buttonText = this.props.hasUserLocation ? 
      'Location Saved!' :
      'Find My Current Location!'
  
    if (this.state.fetchingLocation) {
      buttonText = 'Retrieving current location...';
    }

    const button = (
      <Button
        variant="contained"
        color="primary"
        onClick={this.getGeoLocation}
        className={this.props.classes.button}
        disabled={!this.state.isGeolocationSupported}
      >
        {buttonText}
      </Button>
    );

    if (!this.state.isGeolocationSupported) {
      return (
        <Tooltip
          title="Your browser does not allow us to retrieve your location. Insert your city and state below."
          placement="bottom-start"
          disableTouchListener={true}
        >
          {button}
        </Tooltip>
      );
    }

    return button;

  }

  render() {
    const { classes } = this.props;

    return (
      <SectionContainer classes="userLocation">
        <SectionHeader>Find your current location</SectionHeader>
        <Card>
          <div className="findCurrentLocation">
            {this.renderFetchLocationButton()}
          </div>
          <Divider className={classes.divider} />
          <div className="locationInput">
            <TextField
              name="city"
              label="City"
              value={this.state.city}
              onChange={this.handleInputChange('city')}
              margin="normal"
              className={classes.input}
            />
            <TextField
              name="state"
              label="State"
              value={this.state.state}
              onChange={this.handleInputChange('state')}
              margin="normal"
              className={classes.input}
            />
            <Button 
              onClick={() => this.props.storeLocation(this.state)}
              variant="outlined" 
              color="secondary"
              disabled={!this.state.city && !this.state.state}
              className={classes.button}
            >
              Continue
            </Button>
          </div>
        </Card>
      </SectionContainer>
    );
  }
}

export default withStyles(styles)(UserLocation);
