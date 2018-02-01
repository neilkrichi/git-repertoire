import React, { Component } from 'react';
import './App.css';

export default class SearchBar extends Component {
  render() {
    return(
      <div>
        <form>
          <input type='text' placeholder='search for a user' />
        </form>
      </div>
    )
  }
}
