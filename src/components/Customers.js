import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Customer from "./Customer";

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    // axios get request here
    axios
      .get("http://localhost:5000/customers")
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return <h2> Customers </h2>;
  }
}

export default Customers;
