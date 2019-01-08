import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import Card from '../SharedComponents/Card/Card';
import SectionHeader from '../SharedComponents/SectionHeader/SectionHeader';

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
    const { classes } = this.props;

    return (
      <section className="userLocation">
        <Card>
          <div className="findCurrentLocation">
            <Button
              variant="contained"
              color="primary"
              onClick={this.getGeoLocation}
              className={classes.button}
            >
              Find My Current Location!
            </Button>
          </div>
          <Divider className={classes.divider} />
          <div className="locationInput">
            <TextField
              name="city"
              label="City"
              value={this.state.city}
              onChange={this.handleChange('city')}
              margin="normal"
              className={classes.input}
            />
            <TextField
              name="state"
              label="State"
              value={this.state.state}
              onChange={this.handleChange('state')}
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
      </section>
    );
  }
}

export default withStyles(styles)(UserLocation);
