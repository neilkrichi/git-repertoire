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
    var counter = ''
    if (this.props.count <= 30) {
      counter = `${this.props.count}/${this.props.count}`
    }
    else {
      counter = `30/${this.props.count}`
    }

      if (this.props.userData.length === 0) {
        return ''
      }
      else {
        return(
          <div className='user-page'>
            <h3 className=''>Displaying {counter} results for {this.props.username}</h3>
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
