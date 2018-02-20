import React, { Component } from 'react';
import '../styles/style.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="App-header">
        <h1 className="App-title">Github User Search</h1>
        <p>Powererd by the <a>GitHub API</a></p>
        <div>
          <form onSubmit={this.props.handleSubmit}>
            <input type='text' name='username' value={this.props.username} placeholder='enter a username' onChange={this.props.handleChange} />
            <input type='submit' value='Submit' />
          </form>
        </div>
      </div>
    )
  }
}
