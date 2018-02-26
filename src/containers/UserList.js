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

      return userData.map((user,key) => {
        return(
          <div className='user-page'>
            <div className='user-list'>
              <UserListItem
              user={user}
              key={key}
              />
            </div>
          </div>
        )
          })
        }
      }

renderCounter(){
  if (this.props.users.length > 0) {
    var count = this.props.users[0].total_count
    var counter = ''
    if (count <= 30) {
    counter = `${count}/${count}`
    }
    else {
    counter = `30/${count}`
    }
    return (<h3 className=''>Displaying {counter} results</h3>)
  }
}

  render() {
        return(
          <div className='user-page'>
            {this.renderCounter()}
            <div className='user-list'>
                {this.renderUserList()}
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
