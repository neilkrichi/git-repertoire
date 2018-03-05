import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUserDetails } from '../actions/index';
import '../styles/style.css';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: 'neilkrichi',
      isOpen: false
    };

//    this.togglePopup = this.togglePopup.bind(this)
  }

//  togglePopup(){
//    this.setState({isOpen: !this.state.isOpen})
//    // this.setState({a : b}) > a = b
//    // TOGGLE BETWEEN 2 STATES
//  }

  render(){
    return(
      <div className='user-container'>
        <div className='user-info' onClick={() => {this.props.fetchUserDetails(this.props.user.login)}}>
          <img alt='' className='thumbnail' src={this.props.user.avatar_url} className='thumbnail' />
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
