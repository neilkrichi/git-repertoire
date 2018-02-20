import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserListItem from '../components/UserListItem';
import '../styles/style.css';

class UserList extends Component {
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

function mapStateToProps(state){
  // Whatever is returned will show up as props inside of UserList
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(UserList);
