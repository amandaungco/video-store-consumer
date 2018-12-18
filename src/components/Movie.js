import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
  const { id, overview, image, title } = props;

  return (
    <div className="card card__content">
      <img src={image} alt={`${title}`} className="movie-image"/>
      <p>{image}</p>
      <p>{title}</p>
      <p>{overview}</p>
    </div>
  )
}

Movie.propTypes = {
  image: PropTypes.string,
  overview: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.title,
}

export default Movie;
