import React, { Component } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import axios from "axios";
import Customer from "./Customer";
import "./Customers.css";

class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/customers")
      .then(response => {
        // Create array of customer objects
        // Pass back up to Video Store
        // Have callback update video store state for customers
        const customerComponents = response.data.map(customer => {
          return (
            <Customer
              key={customer.id}
              id={customer.id}
              name={customer.name}
              movieCount={customer.movies_checked_out_count}
              addCustomerCallback={this.addCustomerCallback}
            />
          );
        });
        this.setState({
          customers: customerComponents
        });
      })
      .catch(error => {
        this.setState({
          errorMessage: error.message
        });
      });
  }
  customerCollection = () => {
    return this.state.customers.map(customer => {
      return (
        <Customer
          key={customer.props.id}
          id={customer.props.id}
          name={customer.props.name}
          movieCount={customer.props.movieCount}
          addCustomerCallback={this.props.addCustomerCallback}
        />
      );
    });
  };
  render() {
    return (
      <div className="customers">
        <section className="validation-errors">
          {this.state.errorMessage}
        </section>
        {this.customerCollection()}
      </div>
    );
  }
}

Customers.propTypes = {
  addCustomerCallback: PropTypes.func
};

export default withRouter(Customers);
