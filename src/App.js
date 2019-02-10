import React, { Component } from 'react';
import Navbar from './components/Layout/navbar';
import Dashboard from './containers/Dashboard/Dashboard';
import Vegalite from './containers/vegalite/Vegalite';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Dashboard />
        <Vegalite />
      </div>
    );
  }
}

export default App;
