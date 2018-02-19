import React, { Component } from 'react';
import UserListItem from './UserListItem';
import '../styles/style.css';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return(
      <div className='user-list'>
        {this.props.userData.map((user, key)=>{
          return(
            <UserListItem
              user={user}
              key={key}
              />
          )
        })}
      </div>
    )
  }
}
