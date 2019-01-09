import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  tableCell: {
    paddingRight: '10px',
    paddingLeft: '10px',
  },
});

class VenuesTable extends Component {
  constructor() {
    super();

    this.state = {
      selectedVenues: {},
    };
  }

  handleClick = (venueObj, key) => () => {
    this.setState({
      selectedVenues: {
        ...this.state.selectedVenues,
        [key]: venueObj,
      }
    });

    this.props.handleSelectedVenue(venueObj);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="VenuesTable">
        <Table>
          <TableHead>
            <TableRow>
              {this.props.hasCheckbox && (
                <TableCell className={classes.tableCell}>{/* TODO: style placeholder for checkbox */}</TableCell>
              )}
              <TableCell className={classes.tableCell}>Venue</TableCell>
              <TableCell className={classes.tableCell}>Address</TableCell>
              <TableCell className={classes.tableCell}>Distance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.venues && this.props.venues.map((venue, index) => {
              const uniqueKey = `venue_${venue.id}_${index}`;
              return (
                <TableRow key={uniqueKey}>
                  {this.props.hasCheckbox && (
                    <TableCell className={classes.tableCell}>
                      <Checkbox 
                        onClick={this.handleClick(venue, uniqueKey)} 
                        checked={this.state.selectedVenues[uniqueKey] !== undefined}
                      />
                    </TableCell>
                  )}
                  <TableCell className={classes.tableCell}>{venue.name}</TableCell>
                  <TableCell className={classes.tableCell}>
                    <div>
                      {venue.location.formattedAddress[0]}
                    </div>
                    <div>
                      {venue.location.formattedAddress[1]}
                    </div>
                  </TableCell>
                  <TableCell className={classes.tableCell}>{venue.location.distance}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default withStyles(styles)(VenuesTable);
