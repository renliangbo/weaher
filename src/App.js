import React, { Component } from 'react';

import SearchBar from './container/search_bar';
import WeatherList from './container/weather_list';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <SearchBar/>
       <WeatherList/>
      </div>
    );
  }
}

export default App;
