import React, { Component } from 'react';

import SearchBar from './container/search_bar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <SearchBar/>
      </div>
    );
  }
}

export default App;
