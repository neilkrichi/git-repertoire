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

  getUser(username) {
    fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      return response
    })
  }

  handleChange(e) {
    this.setState({username: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getUser(this.state.username)
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
