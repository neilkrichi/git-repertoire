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
      else { */
        return(
          <div className='user-page'>
            <h3 className=''>Displaying 0 results</h3>
              <div className='user-list'>
                {this.props.users.map((users)=>{
                  users.items.map((user, key) => {
                    // console.log(user)
                    return(
                      <UserListItem
                        user={user}
                        key={key}
                        />
                    )
                  } )

                })}
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
