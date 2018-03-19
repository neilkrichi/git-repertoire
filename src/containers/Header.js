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
      this.props.fetchUsers(this.state.username);
    }

  render() {
    const divStyle = {
    fontSize: 14,
    marginTop: 0,
  };
    return (
      <div className="App-header">
        <h1 className="App-title">Github User Search</h1>
        <p style={divStyle}>by Neil Krichi</p>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input className='form-input' type='text' value={this.state.username} placeholder='Enter a username' onChange={this.handleChange} />
            <button className='form-submit' type='submit' value='Submit' >Submit </button>
          </form>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUsers: fetchUsers }, dispatch);
}

export default connect(null, mapDispatchToProps)(Header)
