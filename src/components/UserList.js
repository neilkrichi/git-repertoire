import React, { Component } from 'react';
import UserListItem from './UserListItem';
import '../styles/style.css';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      if (this.props.userData.length === 0) {
        return ''
      }
      else {
        return(
          <div className='user-page'>
            <h3 className=''>Found {this.props.count} results for {this.props.username}</h3>
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
          </div>
        )
      }
    }
}
