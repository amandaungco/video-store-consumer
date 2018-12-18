<<<<<<< HEAD
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
<<<<<<< HEAD

import Search from './Search';
import Customers from './Customers';
import Library from './Library';
=======
import Search from './Search';
import Customers from './Customers';
import Library from './Library';
import './VideoStore.css'
>>>>>>> hannah
=======
import React, { Component } from "react";
>>>>>>> d6b0b745187f096943edfb2cc1c8f093ba3caed5

class VideoStore extends Component {
  constructor() {
    super();

    this.state = {
<<<<<<< HEAD
      customerName: '',
=======
      customerName: "",
>>>>>>> d6b0b745187f096943edfb2cc1c8f093ba3caed5
      movieName: "",
      isSubmitted: false,
      customers: [],
      alertMessage: ""
    };
  }

<<<<<<< HEAD


  render() {
    return (
    <section>
<<<<<<< HEAD
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
           </ul>

           <hr />
           <h2> VideoStore </h2>

           <Route path="/search" component={Search} />
           <Route path="/customers" component={Customers} />
           <Route path="/library" component={Library}/>
         </div>
      </Router>


=======
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
             <button className="btn btn-info">
               Submit Rental
            </button>
           </ul>


           <Route path="/search" component={Search} />
           <Route path="/customers" component={Customers} />
           <Route path="/library" component={Library}/>
         </div>
      </Router>
      <div>
        <Library  addMovieNameCallback={this.addMovieName} />
      </div>

>>>>>>> hannah
    </section>
  )
=======
  addCustomerToRental = customerObject => {
    this.setState({
      customerName: customerObject.name
    });
  };
  render() {
    return <h2> VideoStore </h2>;
>>>>>>> d6b0b745187f096943edfb2cc1c8f093ba3caed5
  }
}

export default VideoStore;
