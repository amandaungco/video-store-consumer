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

  // item.map(customer => {
  // return (
  // <Customer name={customer.name} id=customer.id key=customer.key />
  // )
  // })

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
          console.log(customer);
          return (
            <Customer key={customer.id} id={customer.id} name={customer.name} />
          );
        });
        // console.log(customerComponents);
        this.setState({
          customers: customerComponents
        });
        console.log("customer in state");
        console.log(this.state.customers);
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
        <Customer
          key={customer.props.id}
          id={customer.props.id}
          name={customer.props.name}
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
