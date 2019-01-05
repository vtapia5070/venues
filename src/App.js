import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      userLocation: {
        longitude: '',
        latitude: '',
      }
    }
  }

  componentWillMount () {
    this.getUserLocation();
  }

  getUserLocation () {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          longitude: position.coords.longitude,
          latitude: position.coords.latitude
        };
        this.setState({
          ...this.state,
          userLocation,
        })
      }, (error) => {
        // TODO: handle error and notify user.
        console.error('An error has occured while retrieving location', error);
      });
    } else {
      // TODO: render modal that prevents user from accessing app
      // and notifies that the location is needed.
      // Perhaps render an input that will allow the user to ender their city and state
      console.log('geolocation is not enabled on this browser');
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
