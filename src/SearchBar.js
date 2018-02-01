import React, { Component } from 'react';
import './App.css';

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({username: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.username !== '') {
      alert('A username was submitted: ' + this.state.username);
      this.setState({username:''})
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='username' placeholder='search for a user' onChange={this.handleChange} />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}
