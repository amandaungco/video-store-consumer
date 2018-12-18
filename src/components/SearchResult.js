import React from 'react';
import PropTypes from 'prop-types';

import './SearchResult.css';




const SearchResult = (props) => {
  const { title, releaseDate, overview, imageURL } = props;
  return (
    <div className="card pet-card">

      <section className="pet-card--header">

      {title} {releaseDate} {imageURL}
        <button
          onClick={() => {props.selectResultCallback(props.id)}}
          className="btn btn-primary"
          >
            Select
        </button>
      </section>
      <section className="pet-card--body">
        { overview.length > 128 ? `${overview.substring(0, 128)}...` : overview}
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
