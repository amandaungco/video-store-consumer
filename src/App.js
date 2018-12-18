import React, { Component } from 'react';
import './App.css';
import VideoStore from './components/VideoStore';
require('dotenv').config()


class App extends Component {
  render() {
    return (
      <main>
        <VideoStore />
      </main>
    );
  }
}

export default App;
