import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from './components/Search';
import Customers from './components/Customers';
import Library from './components/Library';
import VideoStore from './components/VideoStore';
require('dotenv').config()


class App extends Component {
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


           <Route path="/search" component={Search} />
           <Route path="/customers" component={Customers} />
           <Route path="/library" component={Library}/>
         </div>
      </Router>
      <div>
        <VideoStore />
      </div>
    </section>

    );
  }
}

export default App;
