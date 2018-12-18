import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Search from './Search';
import Customers from './Customers';
import Library from './Library';

class VideoStore extends Component {
  constructor() {
    super();

    this.state = {
      customer_name: "",
      movie_name: "",
      isSubmitted: false,
      movies: [],
      customers: [],
      alertMessage: "",
    }
  }



  render() {
    return (
    <section>
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


    </section>
  )
  }
}

export default VideoStore;
