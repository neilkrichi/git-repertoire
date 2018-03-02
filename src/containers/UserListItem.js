import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUserDetails } from '../actions/index';
import '../styles/style.css';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: 'neilkrichi'
    };
  }

  getUserDetails() {
      this.props.fetchUserDetails(this.state.selectedUser)
      console.log(this.props.userdetails)
    }

  render(){
    return(
      <div className='user-container'>
        <div className='user-info' onClick={this.getUserDetails()} >
          <img className='thumbnail' src={this.props.user.avatar_url} className='thumbnail' />
          <h2>{this.props.user.login}</h2>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUserDetails: fetchUserDetails }, dispatch);
}

export default connect(null, mapDispatchToProps)(User)
