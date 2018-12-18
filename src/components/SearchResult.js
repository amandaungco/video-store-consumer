import React from 'react';
import PropTypes from 'prop-types';

import './SearchResult.css';




const SearchResult = (props) => {
  const { id, name, releaseDate, about, image, genre } = props;
  return (
    <div className="card pet-card">

      <section className="pet-card--header">

      { name} {image}
        <button
          onClick={() => {props.selectResultCallback(props.id)}}
          className="btn btn-primary"
          >
            Select
        </button>
      </section>
      <section className="pet-card--body">
        { about.length > 128 ? `${about.substring(0, 128)}...` : about}
      </section>
      <section className="pet-card--footer text-muted">
        {genre}
      </section>
    </div>
  );
};

SearchResult.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  selectResultCallback: PropTypes.func.isRequired

}

export default SearchResult;
