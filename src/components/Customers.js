import React, { Component } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import axios from "axios";
import Customer from "./Customer";
import "./Customers.css";

const Customers = props => {
  const customerCollection = props.customers.map(customer => {
    return (
      <Customer
        key={customer.props.id}
        id={customer.props.id}
        name={customer.props.name}
        movieCount={customer.props.movieCount}
        addCustomerNameCallback={props.addCustomerNameCallback}
      />
    );
  });
  return <div className="customers">{customerCollection}</div>;
};

Customers.propTypes = {
  addCustomerNameCallback: PropTypes.func,
  customers: PropTypes.array
};

export default withRouter(Customers);
