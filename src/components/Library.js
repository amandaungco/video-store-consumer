import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import './Library.css';


class Library extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/')
    .then((response) => {
      console.log('API get movies success!')
      // console.log(response);
      const movieList = response.data.map(movie => {
        return movie;
      })
      console.log(movieList);
      this.setState({
        movies: movieList,
      })

    })
    .catch((error) => {
      console.log("error!");
      this.setState({
        alertMessage: error.message,
      })

    });
  }

  render() {
    const movie = this.state.movies.map((movie) => {
      return <Movie key={movie.id}
              id={movie.id}
              title={movie.title}
              overview={movie.overview}
              image={movie.image_url}
              addMovieNameCallback={this.props.addMovieNameCallback}
              />

    })

    return (
      <section>
        <div className="container library">
          {movie}
        </div>
      </section>
    )
  }
}

Library.propTypes = {
  addMovieNameCallback: PropTypes.func,
  image: PropTypes.string,
  overview: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.title,
};

export default Library;
