import React, { Component } from 'react';
import './App.css';
// import Search from './components/Search';
// import Customers from './components/Customers';
// import Library from './components/Library';
import VideoStore from './components/VideoStore';


class App extends Component {
  render() {
    return (
      <section>

      <div>
        <VideoStore />
      </div>
    </section>

    );
  }
}

export default App;
