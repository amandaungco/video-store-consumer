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
  }
  render() {
    return <h2> Customers </h2>;
  }
}

export default Customers;
