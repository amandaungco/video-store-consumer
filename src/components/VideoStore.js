import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from "./Search";
import Customers from "./Customers";
import Library from "./Library";
import "./VideoStore.css";

class VideoStore extends Component {
  constructor() {
    super();

    this.state = {
      customerName: "",
      movieName: "",
      isSubmitted: false,
      customers: [],
      alertMessage: ""
    };
  }

  render() {
    return (
      <section>
        <h1 className="text-center"> VideoStore </h1>

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
              <button className="btn btn-info">Submit Rental</button>
            </ul>

            <Route path="/search" component={Search} />
            <Route path="/customers" component={Customers} />
            <Route path="/library" component={Library} />
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
