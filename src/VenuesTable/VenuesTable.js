import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

class VenuesTable extends Component {
  constructor() {
    super();

    this.state = {
      selectedVenues: {},
    };
  }

  handleClick = (venueObj) => () => {
    this.setState({
      selectedVenues: {
        ...this.state.selectedVenues,
        [venueObj.name]: venueObj,
      }
    });

    this.props.handleSelectedVenue(venueObj);
  }

  render() {
    return (
      <div className="VenuesTable">
        <Table>
          <TableHead>
            <TableRow>
              {this.props.hasCheckbox && (
                <TableCell>{/* TODO: style placeholder for checkbox */}</TableCell>
              )}
              <TableCell>Venue</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Distance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.venues && this.props.venues.map((venue) => {
              return (
                <TableRow key={`venue_${venue.id}`}>
                  {this.props.hasCheckbox && (
                    <TableCell>
                      <Checkbox 
                        onClick={this.handleClick(venue)} 
                        checked={this.state.selectedVenues[venue.name] !== undefined}
                      />
                    </TableCell>
                  )}
                  <TableCell>{venue.name}</TableCell>
                  <TableCell>
                    <div>
                      {venue.location.formattedAddress[0]}
                    </div>
                    <div>
                      {venue.location.formattedAddress[1]}
                    </div>
                  </TableCell>
                  <TableCell>{venue.location.distance}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default VenuesTable;
