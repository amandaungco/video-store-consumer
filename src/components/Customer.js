import React, { Component } from "react";
import PropTypes from "prop-types";

// Customer has name
class Customer extends Component {
  render() {
    return (
      <div>
        <h2> Customer </h2>
        <h2>{this.props.name}</h2>
        <button
          type="button"
          onClick={() => this.props.addCustomerCallback(this.props.name)}
        >
          Select for Rental
        </button>
      </div>
    );
  }
}

Customer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  addCustomerCallback: PropTypes.func
};

export default Customer;
