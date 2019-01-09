import React from 'react';
import Card from '../SharedComponents/Card/Card';
import SectionHeader from '../SharedComponents/SectionHeader/SectionHeader';
import VenuesTable from '../VenuesTable/VenuesTable';
import SectionContainer from '../SharedComponents/SectionContainer/SectionContainer';

const Itinerary = (props) => {
  return (
    <SectionContainer>
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
    </SectionContainer>
  );
};

export default Itinerary;