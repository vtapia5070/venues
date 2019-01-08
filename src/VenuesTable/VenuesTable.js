import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';

class VenuesTable extends Component {
  constructor() {
    super();

    this.state = {
      ItineraryItems: [],
    };
  }

  render() {
    console.log('this', this.props.venueOptions);
    return (
      <div className="VenuesTable">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Venue</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Distance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.venueOptions && this.props.venueOptions.map((venue) => {
              return (
                <TableRow key={`venue_${venue.id}`}>
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
