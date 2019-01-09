import React, { Component } from 'react';
import Card from '../SharedComponents/Card/Card';
import Pill from '../SharedComponents/Pill/Pill';
import SectionHeader from '../SharedComponents/SectionHeader/SectionHeader';
import VenuesTable from '../VenuesTable/VenuesTable';

const VenueCategory = (props) => {

  const { 
    category, 
    handleCategorySelection,
    venueOptions,
    fetchingCategoryOptions,
    handleSelectedVenue
  } = props;

  return (
    <section>
      <SectionHeader>Search places of interest</SectionHeader>
      <Card>
        <h4>{ category.name }</h4>
        {category.labels.map((label, index) => {
          return (
            <Pill
              key={`${category.name}_${label}_${index}`}
              label={label}
              handleClick={handleCategorySelection(category.name,label)}
              disabled={props.isDisabled}
            />
          )
        })}
      </Card>

      {
        fetchingCategoryOptions && (
          <div>Fetching Suggestions...</div>
        )
      }
      {
        venueOptions.length > 0 && (
          <VenuesTable
            venues={venueOptions}
            handleSelectedVenue={handleSelectedVenue}
            hasCheckbox
          />
        )}
    </section>
  );
}

export default VenueCategory;