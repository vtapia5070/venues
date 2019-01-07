import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';

class ItineraryTable extends Component {
  constructor() {
    super();

    this.state = {
      ItineraryItems: [],
    };
  }

  render() {
    return (
      <div className="ItineraryTable">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Venue</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>Distance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </div>
    );
  }
}

export default ItineraryTable;
