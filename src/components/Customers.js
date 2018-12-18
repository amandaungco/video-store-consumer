import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Customer from "./Customer";
import "./Customers.css";

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  movieRentalCount = () => {
    //Returns count of customer movies
    // Get request to our Rails api?
  };

  componentDidMount() {
    axios
      // Deploying?
      // They could run server on -5000
      // hardcode the heroku version later / change to localhost during development
      .get("http://localhost:5000/customers")
      .then(response => {
        // Create array of customer objects
        // Pass back up to Video Store
        // Have callback update video store state for customers
        const customerComponents = response.data.map(customer => {
          console.log(customer.movies_checked_out_count);
          return (
            <Customer
              key={customer.id}
              id={customer.id}
              name={customer.name}
              movieCount={customer.movies_checked_out_count}
              addCustomerCallback={this.props.addCustomerCallback}
            />
          );
        });
        this.setState({
          customers: customerComponents
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          errorMessage: error.message
        });
      });
  }
  customerCollection = () => {
    return this.state.customers.map(customer => {
      return (
        // TODO Add movie count to customer state

        <Customer
          key={customer.props.id}
          id={customer.props.id}
          name={customer.props.name}
          movieCount={customer.props.movieCount}
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

export default Customers;
