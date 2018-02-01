import React, { Component } from 'react';
import SearchBar from './SearchBar';
import './App.css';

export default class Header extends Component {
  render(){
    return(
      <div className="App-header">
        <h1 className="App-title">Welcome to React</h1>
        <SearchBar />
      </div>
    )
  }
}
