import React, { Component } from 'react';
import './App.css';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return(
      <div className='user-details'>
        <div className='user-profile'>
          <h2>{this.props.user.name}</h2>
          <p>{this.props.public_repos} public repositories</p>
          <p>{this.props.following} following</p>
          <p>{this.props.followers} followers</p>
        </div>
      </div>

    )
  }
}
