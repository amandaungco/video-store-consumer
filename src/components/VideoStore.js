import React, { Component } from "react";

class VideoStore extends Component {
  constructor() {
    super();

    this.state = {
      customer_name: "",
      movie_name: "",
      isSubmitted: false,
      movies: [],
      customers: [],
      alertMessage: ""
    };
  }

  addCustomerToRental = customerObject => {
    this.setState({
      customerName: customerObject.name
    });
  };
  render() {
    return <h2> VideoStore </h2>;
  }
}

export default VideoStore;
