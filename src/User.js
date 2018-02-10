import React, { Component } from 'react';
import Avatar from './Avatar'
import './App.css';

export default class User extends Component {
  render(){
    return(
      <div className='user-container'>
        <Avatar />
        <div className='user-info'>
          <h2>Neil Krichi</h2>
          <p>9 repositories</p>
          <p>3 following</p>
          <p>0 followers</p>
        </div>
      </div>

    )
  }
}
