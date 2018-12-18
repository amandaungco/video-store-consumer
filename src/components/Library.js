import React, {Component} from 'react';
import axios from 'axios';
import Movie from './Movie';

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
              image={movie.image_url} />

    })

    return (
      <section>
        <h2>Library</h2>
        {movie}
      </section>
    )
  }
}

export default Library;
