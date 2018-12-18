import React, {Component} from 'react';

class VideoStore extends Component {
  constructor() {
    super();

    this.state = {
      customer_name: "",
      movie_name: "",
      isSubmitted: false,
      movies: [],
      customers: [],
      alertMessage: "",
    }
  }

  render() {
    return <h2> VideoStore </h2>

  }
}

export default VideoStore;
