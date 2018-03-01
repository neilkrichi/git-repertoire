import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/style.css';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderUserDetails(){
    const userDetails = this.props.userdetails[0];

    if (this.props.userdetails.length > 0 ) {
      console.log(userDetails.login)
      return(
        <div className='user-details'>
          <div className='user-profile'>
            <img className='thumbnail' src={userDetails.avatar_url} className='thumbnail' />
            <h2>{userDetails.login}</h2>
            <p>{userDetails.public_repos} public repositories</p>
            <p>{userDetails.following} following</p>
            <p>{userDetails.followers} followers</p>
          </div>
        </div>
      )
    }
    else {
      return '';
    }
  }

  render(){
    return (
      this.renderUserDetails()
    )
  }
}

function mapStateToProps({ userdetails }){
  // Whatever is returned will show up as props inside of UserList
  return { userdetails };
}

export default connect(mapStateToProps)(UserDetails);
