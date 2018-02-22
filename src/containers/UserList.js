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

  renderUserList() {
    if (this.props.users.length > 0) {
      let count = this.props.users[0].total_count
      let userData = this.props.users[0].items
      console.log(count, userData)

      userData.map((user,key) => {
        return(
          <div>
            <h2>{count}</h2>
            <h3>{user.login}</h3>
              <UserListItem
              user={user}
              key={key}
              />
          </div>
        )
          })
        }
      }

  render() {
    /*    var counter = ''
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

    this.props.users[0].items.map((user, key) => {
    return(

    )
    })}; */
        return(
          <div className='user-page'>
            <h3 className=''>Displaying 0 results</h3>
            <div className=''>
              <ul>
                {this.renderUserList()}
              </ul>
            </div>
          </div>
        )
      }
    }

    function mapStateToProps({ users }){
      // Whatever is returned will show up as props inside of UserList
      return { users };
    }

    export default connect(mapStateToProps)(UserList);
