import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'
import Search from "./Search";
import Customers from "./Customers";
import Library from "./Library";
import "./VideoStore.css";

class VideoStore extends Component {
  constructor() {
    super();
    this.state = {
      customerName: "",
      customerID: 0,
      movieName: "",
      isSubmitted: false,
      alertMessage: ""
    };
  }
  addMovieName = (name, id) => {
    this.setState({
      movieName: name,
      movieID: id
    });
  };
  addCustomerName = (name, id) => {
    this.setState({
      customerName: name,
      customerID: id,
    });
  };

  rentalCheckout = () => {
    const { movieName, customerID, customerName } = this.state;
    const url = `http://localhost:5000/rentals/${movieName}/check-out`
    let dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 7);

    axios.post(url, {customer_id: customerID, due_date: dueDate})
      .then((response) => {
        console.log('API Checkout Success!');
        console.log(response);

        this.setState({
          alertMessage: `${customerName} successfully Checked out ${movieName}!`,
          movieName: "",
          customerID: 0,
          customerName: "",
        })
      })
      .catch((error) => {
        this.setState({
          alertMessage: `Failure ${error.message}`,
        })
      });
  }

  render() {
    return (
      <section>
        <h1 className="text-center"> VideoStore </h1>​
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/customers">Customers</Link>
              </li>
              <li>
                <Link to="/library">Library</Link>
              </li>
              <li>
                Movie Name: <span>{this.state.movieName}</span>
              </li>
              <li>
                Customer Name: <span>{this.state.customerName}</span>
              </li>
              <button className="btn btn-info"
              onClick={this.rentalCheckout}>Submit Rental</button>
            </ul>
            <h4 className="alertMessage text-center">{this.state.alertMessage}</h4>
            <Route path="/search" component={Search} />
            <Route
              path="/customers"
              render={() => (
                <Customers addCustomerNameCallback={this.addCustomerName} />
              )}
            />
            <Route
              path="/library"
              render={() => (
                <Library addMovieNameCallback={this.addMovieName} />
              )}
            />
          </div>
        </Router>
        <div>
          <Library addMovieNameCallback={this.addMovieName} />
        </div>
      </section>
    );
  }
}
export default VideoStore;
