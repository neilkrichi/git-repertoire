import React, { Component } from 'react';
import SearchBar from './SearchBar';
import './App.css';

export default class Header extends Component {
  render(){
    return(
      <div className="App-header">
        <h1 className="App-title">Github User Search</h1>
        <h3>Find Github users</h3>
        <p>Powererd by the <a>GitHub API</a></p>
        <SearchBar />
      </div>
    )
  }
}
