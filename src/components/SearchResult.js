import React from 'react';
import PropTypes from 'prop-types';
import './SearchResult.css';
import axios from "axios";


const SearchResult = (props) => {
  const {title, releaseDate, overview, imageURL} = props;
  const onSearchResultSelect =()=> {


    axios.post("http://localhost:5000/movies", props)

    .then(response => {
      console.log(response)
      console.log("request posted")
    })
    .catch(error => {
      console.log(error)
    })
  }


  return (
    <div className="card pet-card">

      <section className="pet-card--header">

        {title} {releaseDate}
        <img src={imageURL}/>
        <button
          onClick={() => {onSearchResultSelect()}}
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
}





SearchResult.propTypes = {
  releaseDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string,
  imageURL: PropTypes.string.isRequired,

};

export default SearchResult;
