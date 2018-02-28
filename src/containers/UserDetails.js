import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/style.css';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    const user = this.props.userDetails;

    if (user.length === 0) {
      return ''
    }
    else {
      return(
        <div className='user-details'>
          <div className='user-profile'>
            <img className='thumbnail' src={user.avatar_url} className='thumbnail' />
            <h2>{user.login}</h2>
            <p>{user.public_repos} public repositories</p>
            <p>{user.following} following</p>
            <p>{user.followers} followers</p>
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps({ userdetails }){
  // Whatever is returned will show up as props inside of UserList
  return { userdetails };
}

export default connect(mapStateToProps)(UserDetails);
