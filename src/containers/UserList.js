import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserListItem from './UserListItem';
import '../styles/style.css';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderUserList() {
    if (this.props.users.length > 0) {
      let userData = this.props.users[0].items

      return userData.map((user, key) => {
        return(
              <UserListItem
              user={user}
              key={key}
              />
        )
          })
        }
      }

renderCounter(){
  if (this.props.users.length > 0) {
    var count = this.props.users[0].total_count
    var counter = ''
    if (count <= 30) {
    counter = `${count} out of ${count}`
    }
    else {
    counter = `30 out of ${count}`
    }
    return (<h2 className='centered-text'>Displaying {counter} results</h2>)
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
