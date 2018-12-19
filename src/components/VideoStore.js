import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import Search from "./Search";
import Customers from "./Customers";
import Customer from "./Customer";
import Library from "./Library";
import "./VideoStore.css";

class VideoStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerName: "",
      customerID: 0,
      movieName: "",
      isSubmitted: false,
      alertMessage: "",
      customers: [],
      movies: []
    };
  }

  // API Request for customers
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
            />
          );
        });
        this.setState({
          customers: customerComponents
        });
      })
      .catch(error => {
        this.setState({
          alertMessage: error.message
        });
      });
    // API request for movies
    axios
      .get("http://localhost:5000/")
      .then(response => {
        console.log("API get movies success!");
        // console.log(response);
        const movieList = response.data.map(movie => {
          return movie;
        });
        console.log(movieList);
        this.setState({
          movies: movieList
        });
      })
      .catch(error => {
        console.log("error!");
        this.setState({
          alertMessage: error.message
        });
      });
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
      customerID: id
    });
  };
  // TODO - How to send from search result to VideoStore? Callback to Search?
  // addMovieToLibrary = newMovie => {
  //   this.state.movies.push(newMovie);
  //   this.setState({
  //     movies: this.state.movies
  //   });
  // };

  rentalCheckout = () => {
    const { movieName, customerID, customerName } = this.state;
    const url = `http://localhost:5000/rentals/${movieName}/check-out`;
    let dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 7);

    axios
      .post(url, { customer_id: customerID, due_date: dueDate })
      .then(response => {
        console.log("API Checkout Success!");
        console.log(response);

        this.setState({
          alertMessage: `${customerName} successfully Checked out ${movieName}!`,
          movieName: "",
          customerID: 0,
          customerName: ""
        });
      })
      .catch(error => {
        this.setState({
          alertMessage: `Failure ${error.message}`
        });
      });
  };

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
              <button className="btn btn-info" onClick={this.rentalCheckout}>
                Submit Rental
              </button>
            </ul>
            <h4 className="alertMessage text-center">
              {this.state.alertMessage}
            </h4>
            <Route
              exact
              path="/"
              render={() => (
                <Library
                  addMovieNameCallback={this.addMovieName}
                  movies={this.state.movies}
                />
              )}
            />
            <Route path="/search" component={Search} />
            <Route
              path="/customers"
              render={() => (
                <Customers
                  addCustomerNameCallback={this.addCustomerName}
                  customers={this.state.customers}
                />
              )}
            />
            <Route
              path="/library"
              render={() => (
                <Library
                  addMovieNameCallback={this.addMovieName}
                  movies={this.state.movies}
                />
              )}
            />
          </div>
        </Router>
        <div>
          <Library
            addMovieNameCallback={this.addMovieName}
            movies={this.state.movies}
          />
        </div>
      </section>
    );
  }
}
export default VideoStore;
