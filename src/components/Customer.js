import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Customer.css";

class Customer extends Component {
  render() {
    return (
      <section className="customerInformation">
        <h2>{this.props.name}</h2>
        <p>{this.props.movieCount} movies checked out</p>
        <button
          type="button"
          className="addCustomerToRental"
          onClick={
            () => console.log(this.props)
            // this.props.addCustomerCallback(this.props.addCustomerCallback)
          }
        >
          Select for Rental
        </button>
      </section>
    );
  }
}

Customer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  addCustomerCallback: PropTypes.func,
  movieCount: PropTypes.number
};

export default Customer;
