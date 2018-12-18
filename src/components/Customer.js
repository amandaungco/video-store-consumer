import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Customer.css";

const Customer = props => {
  const { id, name, movieCount } = props;

  return (
    <section className="customerInformation">
      <h2>{name}</h2>
      <p>{movieCount} movies checked out</p>
      <button
        type="button"
        className="addCustomerToRental"
        onClick={() => {
          props.addCustomerCallback(name);
        }}
      >
        Select for Rental
      </button>
    </section>
  );
};

Customer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  addCustomerCallback: PropTypes.func,
  movieCount: PropTypes.number
};

export default Customer;
