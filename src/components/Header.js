import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../actions/index';

import '../styles/style.css';

class Header extends Component {
  constructor(props) {
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
      this.props.fetchUsers(this.state.username)
      //this.getUser(this.state.username);
      //this.getUserDetails(this.state.selectedUser);
    }

  render() {
    return (
      <div className="App-header">
        <h1 className="App-title">Github User Search</h1>
        <p>Powererd by the <a>GitHub API</a></p>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.username} placeholder='enter a username' onChange={this.handleChange} />
            <input type='submit' value='Submit' />
          </form>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUsers }, dispatch);
}

export default connect(null, mapDispatchToProps)(Header)
