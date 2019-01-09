import React from 'react';
import Card from '../SharedComponents/Card/Card';
import SectionHeader from '../SharedComponents/SectionHeader/SectionHeader';
import VenuesTable from '../VenuesTable/VenuesTable';

const Itinerary = (props) => {
  return (
    <section>
      <SectionHeader>Itinerary</SectionHeader>
      <Card>
        {
          props.itinerary.length > 0 ? (
            <VenuesTable
              venues={props.itinerary}
            />
          ) : (
            <div>Build your itinerary by selecting venue options above!</div>
          )}
      </Card>
    </section>
  );
};

export default Itinerary;